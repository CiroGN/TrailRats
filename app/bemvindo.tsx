import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { navigate } from 'expo-router/build/global-state/routing';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>BEM VINDO USER!</Text>

        {/* Botão que leva para a tela de perfil */}
        <TouchableOpacity onPress={() => navigate('/Perfil')}>
          <AntDesign name="user" size={28} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        {/* Botão NOVA TRILHA */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#7FE3D8' }]}
          onPress={() => navigate('/TrailFormScreen1')}
        >
          <Text style={styles.buttonText}>NOVA TRILHA</Text>
        </TouchableOpacity>

        {/* Botão TRILHAS REALIZADAS */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#47B6FF' }]}
          onPress={() => navigate('/feed')}
        >
          <Text style={styles.buttonText}>TRILHAS REALIZADAS</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.logo}>
        <Text style={styles.logoTrail}>Trail</Text>
        <Text style={styles.logoRats}> Rats</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFAA5C',
    paddingTop: 60,
    alignItems: 'center',
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  welcome: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 4,
  },
  buttonContainer: {
    width: '90%',
    backgroundColor: '#FFD18B',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 20,
  },
  button: {
    width: '90%',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  logo: {
    position: 'absolute',
    bottom: 40,
    fontSize: 32,
    fontWeight: 'bold',
  },
  logoTrail: {
    color: '#FFB347',
  },
  logoRats: {
    color: '#FFD700',
  },
});
