import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const trilhasExemplo = [
  { id: '1', titulo: 'Trilha da Pedra Alta', data: '12/05/2025' },
  { id: '2', titulo: 'Cachoeira do Vale Azul', data: '28/04/2025' },
  { id: '3', titulo: 'Morro do Mirante', data: '03/04/2025' },
];

export default function Feed() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trilhas Realizadas</Text>

      <FlatList
        data={trilhasExemplo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.trilhaItem}>
            <Text style={styles.trilhaTitulo}>{item.titulo}</Text>
            <Text style={styles.trilhaData}>{item.data}</Text>
          </View>
        )}
        style={styles.lista}
      />

      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE7B0',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#333',
  },
  lista: {
    flexGrow: 0,
  },
  trilhaItem: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  trilhaTitulo: {
    fontSize: 18,
    fontWeight: '600',
  },
  trilhaData: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  voltar: {
    marginTop: 30,
    backgroundColor: '#FFAA5C',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  voltarTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
