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

export default function AdicionarFotosScreen() {
  const [imagens, setImagens] = useState([]);

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

  const handleAvancar = () => {
    Alert.alert('Avançar', 'Próxima etapa...');
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
