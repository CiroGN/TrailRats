import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';
import styles from './styles/fotos'; // importando estilos separados

export default function AdicionarFotosScreen() {
  const handleIrParaOpcoes = () => {
    navigate('/opcao_foto');
  };

  return (
    <View style={styles.container}>
      {/* Seção principal com título e botão */}
      <View style={styles.topSection}>
        <Text style={styles.headerText}>ADICIONE FOTOS</Text>

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

      {/* Logo no rodapé */}
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
}
