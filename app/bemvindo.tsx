import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { navigate } from 'expo-router/build/global-state/routing';
import {Stack} from "expo-router";

// Importando estilos unificados
import styles from './styles/bemvindoStyles';

export default function BemVindoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>BEM VINDO!</Text>

        <TouchableOpacity onPress={() => navigate('/Perfil')}>
          <AntDesign name="user" size={28} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('/TrailFormScreen1')}
        >
          <Text style={styles.buttonText}>NOVA TRILHA</Text>
        </TouchableOpacity>

        <Stack.Screen
          name="login"
          options={{
            headerShown: false, 
 
          }}
        />

              
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('/feed')}
        >
          <Text style={styles.buttonText}>TRILHAS REALIZADAS</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/images/logo.png')} // Ajuste se necessário
        style={styles.logoImage}
      />
    </View>
  );
}
