import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>BEM VINDO USER!</Text>
        <AntDesign name="user" size={28} color="black" style={styles.icon} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#7FE3D8' }]}>
          <Text style={styles.buttonText}>NOVA TRILHA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#47B6FF' }]}>
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
    backgroundColor: '#FFAA5C', // cor sólida semelhante ao fundo laranja
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
