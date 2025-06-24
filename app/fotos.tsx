import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AdicionarFotosScreen() {
  const navigation = useNavigation();

  const handleIrParaOpcoes = () => {
    navigation.navigate('opcao_foto'); // Ajuste para o nome correto da sua rota
  };

  return (
    <View style={styles.container}>
      {/* Agrupamento do título + botão da câmera */}
      <View style={styles.topSection}>
        {/* Título */}
        <View style={styles.header}>
          <Text style={styles.headerText}>ADICIONE FOTOS</Text>
        </View>

        {/* Botão com ícone da câmera */}
        <TouchableOpacity style={styles.cameraButton} onPress={handleIrParaOpcoes}>
          <Image
            source={require('../assets/images/camera.png')}
            style={styles.cameraIcon}
          />
          <View style={styles.plusOverlay}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Logo Trail Rats no rodapé */}
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA44F',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  topSection: {
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFD18B',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10, // ajuste aqui o espaçamento entre o botão e o quadrado
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cameraButton: {
    backgroundColor: '#FFD18B',
    padding: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  cameraIcon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  plusOverlay: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  plusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },
});
