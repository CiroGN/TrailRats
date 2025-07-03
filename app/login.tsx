import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANDO SEU ESTILO SEPARADO
import styles from './styles/loginStyles'; 

const LoginScreen: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const API_URL = 'http://192.168.15.24:5000'
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, senha }),
      });

      const data = await response.json();

      if (data.sucesso) {
        Alert.alert('Login realizado com sucesso!');
        await AsyncStorage.setItem('user_id', String(data.user_id));
        navigate('/bemvindo');
      } else {
        Alert.alert('Erro', 'Nome ou senha inválidos');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // ajuste se necessário
        style={styles.logo}
      />

      <View style={styles.form}>
        <Text style={styles.label}>NOME:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
        />

        <Text style={styles.label}>SENHA:</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>CAMINHE! CORRA! NÃO SEJA FRANGO</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
