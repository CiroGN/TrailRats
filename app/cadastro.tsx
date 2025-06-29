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

// Importando o estilo separado
import styles from './styles/registerStyles';

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const API_URL = 'http://192.168.15.24:5000';

  const handleRegister = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{5,}$/; // Pelo menos 5 caracteres

    if (!emailRegex.test(email)) {
      Alert.alert('Erro de Cadastro', 'Por favor, insira um email válido (ex: seu.email@exemplo.com).');
      return;
    }
    if (nome.length <= 2) {
      Alert.alert('Erro de Cadastro', 'Insira um nome válido, ao menos 3 letras.');
      return;
    }
    if (!passwordRegex.test(senha)) {
      Alert.alert('Erro de Cadastro', 'A senha deve ter pelo menos 5 caracteres.');
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert('Erro de Cadastro', 'As senhas não coincidem!');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/cadastro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nome, senha }),
      });

      const data = await response.json();

      if (data.sucesso) {
        Alert.alert('Cadastro realizado com sucesso!');
        navigate('/login');
      } else {
        Alert.alert('Erro', data.mensagem || 'Falha no cadastro.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />

      <View style={styles.form}>
        <Text style={styles.label}>EMAIL:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

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

        <Text style={styles.label}>CONFIRMA SENHA:</Text>
        <TextInput
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholder="Confirme sua senha"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>CAMINHE! CORRA! NÃO SEJA FRANGO</Text>
    </SafeAreaView>
  );
};

export default RegisterScreen;
