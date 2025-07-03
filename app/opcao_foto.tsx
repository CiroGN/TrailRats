import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles/opcao_fotoStyles'; // importando os estilos separados
import { navigate } from 'expo-router/build/global-state/routing';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AdicionarFotosScreen() {
  const [imagens, setImagens] = useState([]);
  const API_URL = 'http://192.168.15.24:5000';

  const handleGaleria = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Permita acesso à galeria para continuar.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const novasImagens = result.assets.map((asset) => asset.uri);
      setImagens([...imagens, ...novasImagens]);
    }
  };

  const handleCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Permita acesso à câmera para continuar.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const novasImagens = result.assets.map((asset) => asset.uri);
      setImagens([...imagens, ...novasImagens]);
    }
  };

  const handleAvancar = async () => {
  try {
    const trailId = await AsyncStorage.getItem('trail_id');
    if (!trailId) {
      Alert.alert('Erro', 'ID da trilha não encontrado');
      return;
    }

    if (imagens.length === 0) {
      Alert.alert('Atenção', 'Adicione ao menos uma imagem antes de continuar.');
      return;
    }

    const formData = new FormData();
    formData.append('trail_id', trailId);

    imagens.forEach((uri, index) => {
      const filename = uri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename || '');
      const ext = match ? match[1] : 'jpg';
      const mimeType = `image/${ext}`;

      formData.append('imagens', {
        uri,
        name: `imagem_${index}.${ext}`,
        type: mimeType,
      });
    });
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(`${API_URL}/upload_imagem`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    });

    const data = await response.json();

    if (data.sucesso) {
      Alert.alert('Sucesso', 'Imagens salvas com sucesso!');
      navigate('/feed');
    } else {
      Alert.alert('Erro', data.mensagem || 'Erro ao enviar imagens.');
    }

  } catch (error) {
    console.error(error);
    Alert.alert('Erro', 'Falha na comunicação com o servidor.');
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ADICIONE FOTOS</Text>
      </View>

      <TouchableOpacity style={styles.optionButton} onPress={handleGaleria}>
        <Image source={require('../assets/images/galeria.png')} style={styles.icon} />
        <Text style={styles.optionText}>GALERIA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleCamera}>
        <Image source={require('../assets/images/camera.png')} style={styles.icon} />
        <Text style={styles.optionText}>CÂMERA</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        contentContainerStyle={styles.imageList}
        showsHorizontalScrollIndicator={false}
      >
        {imagens.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.previewImage} />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.advanceButton} onPress={handleAvancar}>
        <Text style={styles.advanceText}>AVANÇAR</Text>
      </TouchableOpacity>
    </View>
  );
}
