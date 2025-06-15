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
    backgroundColor: '#FFA726', // cor de fundo (degrade pode ser feito com expo-linear-gradient)
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


const LoginScreen: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://SEU_BACKEND/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, senha }),
      });

      const data = await response.json();

      if (data.sucesso) {
        Alert.alert('Login realizado com sucesso!');
        // Navegar para próxima tela aqui
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
        source={require('../assets/images/favicon.png')} // coloque sua imagem aqui
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
