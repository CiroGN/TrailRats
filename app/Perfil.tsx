import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';
import styles from './styles/perfilStyles';
import {Stack} from "expo-router";

export default function ProfileScreen() {
  const distanciaPercorrida = '0 km';
  const trilhasTotais = '0';

  const handleEditar = () => {
    navigate('/edicao');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>Foto</Text>
          </View>
        </View>

        <Text style={styles.name}>nome do user</Text>

        <Text style={styles.label}>DISTÂNCIA PERCORRIDA:</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{distanciaPercorrida}</Text>
        </View>

        <Text style={styles.label}>TRILHAS TOTAIS:</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{trilhasTotais}</Text>
        </View>
      </View>

        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'orange', 
            },
            headerTintColor: 'black', 
            headerTitleStyle: {
              color: 'orange', 
            },
          }}
        />
        
      <TouchableOpacity style={styles.button} onPress={handleEditar}>
        <Text style={styles.buttonText}>EDITAR PERFIL</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
