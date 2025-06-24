import { navigate } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA726', // laranja de fundo (pode usar gradiente também)
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#FFE0B2',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
  },
  label: {
    color: '#D32F2F',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF3E0',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#CCFF00',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#D32F2F',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: '#D32F2F',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});


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
    if (nome.length <= 2 ){
      Alert.alert('Erro de Cadastro', 'Insira um nome válido, ao menos 3 letras');
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
        source={require('../assets/images/favicon.png')} // atualize o caminho da imagem
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
