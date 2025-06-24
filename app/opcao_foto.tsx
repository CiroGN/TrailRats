import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AdicionarFotosScreen() {
  const [imagens, setImagens] = useState([]);

  // Acessa galeria
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

  // Acessa câmera
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
    // Aqui você pode navegar para outra tela, por exemplo:
    // navigation.navigate('ProximaTela');
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ADICIONE FOTOS</Text>
      </View>

      {/* Botões de opções */}
      <TouchableOpacity style={styles.optionButton} onPress={handleGaleria}>
        <Image source={require('../assets/images/galeria.png')} style={styles.icon} />
        <Text style={styles.optionText}>GALERIA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleCamera}>
        <Image source={require('../assets/images/camera.png')} style={styles.icon} />
        <Text style={styles.optionText}>CÂMERA</Text>
      </TouchableOpacity>

      {/* Imagens selecionadas */}
      <ScrollView
        horizontal
        contentContainerStyle={styles.imageList}
        showsHorizontalScrollIndicator={false}
      >
        {imagens.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.previewImage} />
        ))}
      </ScrollView>

      {/* Botão Avançar */}
      <TouchableOpacity style={styles.advanceButton} onPress={handleAvancar}>
        <Text style={styles.advanceText}>AVANÇAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#834D1A',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    width: '100%',
    backgroundColor: '#A98D62',
    paddingVertical: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  optionButton: {
    backgroundColor: '#FFD76D',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    width: 220,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  imageList: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  advanceButton: {
    marginTop: 30,
    backgroundColor: '#A98D62',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  advanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
