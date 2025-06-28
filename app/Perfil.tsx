Perfil

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const distanciaPercorrida = '0 km';
  const trilhasTotais = '0';

  const handleEditar = () => {
    navigation.navigate('edicao'); // Certifique-se de registrar essa rota no seu Stack.Navigator
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          {/* Placeholder para futura imagem do perfil */}
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

      <TouchableOpacity style={styles.button} onPress={handleEditar}>
        <Text style={styles.buttonText}>EDITAR PERFIL</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFA44F',
    alignItems: 'center',
    paddingVertical: 40,
  },
  card: {
    backgroundColor: '#FFD18B',
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '85%',
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FFF1D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 12,
    color: '#555',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  valueContainer: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: '#FFF1D6',
    marginBottom: 10,
  },
  valueText: {
    fontSize: 16,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#E9FF00',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
