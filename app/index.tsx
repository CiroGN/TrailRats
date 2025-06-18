import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';


export default function Home() {

  return (
    <View style={styles.container}>
      {/* Aqui você pode colocar um logo com <Image source={} style={styles.logo} /> */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA726', // cor de fundo
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
    alignItems: 'center',
  },
  title: {
    color: '#D32F2F',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#CCFF00',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
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
