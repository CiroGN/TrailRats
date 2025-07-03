import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/feedStyles';

const API_URL = 'http://192.168.15.24:5000';

export default function Feed() {
  const navigation = useNavigation();
  const [trilhas, setTrilhas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarTrilhas = async () => {
      try {
        const response = await fetch(`${API_URL}/feed`);
        const data = await response.json();
        if (data.sucesso) {
          setTrilhas(data.trilhas);
        }
      } catch (error) {
        console.error('Erro ao carregar o feed:', error);
      } finally {
        setCarregando(false);
      }
    };

    carregarTrilhas();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.trilhaItem}
      onPress={() => navigation.navigate('detalhesTrilha', { trailId: item.trail_id })}
    >
      {item.imagem_capa && (
        <Image
          source={{ uri: `${API_URL}/${item.imagem_capa}` }}
          style={styles.imagemCapa}
        />
      )}
      <View style={styles.trilhaItem}>
        <Text style={styles.trilhaTitulo}>{item.trail_name}</Text>
        <Text style={styles.trilhaData}>por {item.usuario}</Text>
        <Text style={styles.trilhaResumo}>
          {item.distance} km - {item.time}h - Dificuldade: {item.dificuldade}/5
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trilhas Recentes</Text>
      {carregando ? (
        <ActivityIndicator size="large" color="#FFAA5C" />
      ) : (
        <FlatList
          data={trilhas}
          keyExtractor={(item) => item.trail_id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}
