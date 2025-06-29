import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';
import styles from './styles/indexStyles'; // <-- Importando os estilos separados

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // Altere para o caminho correto
        style={styles.logo}
      />

      <View style={styles.form}>
        <Text style={styles.title}>Bem-vindo ao GymRats</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('/login')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('/cadastro')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>Vamos nessa!</Text>
    </View>
  );
}
