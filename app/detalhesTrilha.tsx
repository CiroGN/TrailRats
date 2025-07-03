import React, { useEffect, useState } from 'react';
import {
  View, Text, Image, ScrollView, StyleSheet, ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const API_URL = 'http://192.168.15.24:5000';

export default function DetalhesTrilha() {
  const route = useRoute();
  const { trailId } = route.params;
  const [trilha, setTrilha] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/trail/${trailId}`)
      .then(res => res.json())
      .then(data => {
        if (data.sucesso) setTrilha(data.trilha);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading || !trilha) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#A98D62" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{trilha.nome}</Text>
      <Text style={styles.subtitle}>Postado por {trilha.usuario}</Text>

      {trilha.imagens?.map((img, index) => (
        <Image
          key={index}
          source={{ uri: `${API_URL}/${img}` }}
          style={styles.imagem}
        />
      ))}

      <View style={styles.infoBox}>
        <Text style={styles.info}>Distância: {trilha.distancia} km</Text>
        <Text style={styles.info}>Tempo: {trilha.tempo} h</Text>
        <Text style={styles.info}>Dificuldade: {trilha.dificuldade} / 5</Text>
        <Text style={styles.info}>Perigo: {trilha.perigo} / 5</Text>
        <Text style={styles.info}>Assistência: {trilha.assistencia ? 'Sim' : 'Não'}</Text>
        <Text style={styles.info}>Guia necessário: {trilha.precisaGuia ? 'Sim' : 'Não'}</Text>
        <Text style={styles.info}>Recomenda para idosos: {trilha.idosos ? 'Sim' : 'Não'}</Text>
        <Text style={styles.info}>Recomenda para crianças: {trilha.criancas ? 'Sim' : 'Não'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoBox: {
    marginTop: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 16,
  },
  info: {
    fontSize: 14,
    marginBottom: 6,
  },
});
