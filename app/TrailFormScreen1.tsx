import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';

// Importa o estilo separado
import styles from './styles/trailFormScreen1Styles';

export default function TrailFormScreen() {
  const [trailName, setTrailName] = useState('');
  const [difficulty, setDifficulty] = useState(0);
  const [danger, setDanger] = useState(0);
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [assistencia, setAssistencia] = useState(false);
  const [precisaGuia, setPrecisaGuia] = useState(false);
  const [idosos, setIdosos] = useState(false);
  const [criancas, setCriancas] = useState(false);
  const API_URL = 'http://192.168.15.24:5000';

  const handleCadastrarTrilha = async () => {
    try {
      const response = await fetch(`${API_URL}/trail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trailName,
          difficulty,
          danger,
          distance,
          time,
          assistencia,
          precisaGuia,
          idosos,
          criancas,
        }),
      });

      const data = await response.json();

      if (data.sucesso) {
        Alert.alert('Sucesso', data.mensagem);
        navigate('/fotos');
      } else {
        Alert.alert('Erro', data.mensagem || 'Erro ao cadastrar trilha');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro de conexão com o servidor');
    }
  };

  const renderCircles = (selected, setSelected) => (
    <View style={styles.circleRow}>
      {[1, 2, 3, 4, 5].map((val) => (
        <TouchableOpacity
          key={val}
          onPress={() => setSelected(val)}
          style={[
            styles.circle,
            selected >= val ? styles.circleSelected : {},
          ]}
        />
      ))}
    </View>
  );

  const renderSwitch = (label, value, setValue) => (
    <View style={styles.switchRow}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={setValue} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Cadastro de Trilha</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>NOME DA TRILHA</Text>
        <TextInput
          style={styles.input}
          value={trailName}
          onChangeText={setTrailName}
        />

        <Text style={styles.label}>DIFICULDADE</Text>
        {renderCircles(difficulty, setDifficulty)}

        <Text style={styles.label}>PERIGO</Text>
        {renderCircles(danger, setDanger)}

        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>DISTÂNCIA (KM)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={distance}
              onChangeText={setDistance}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.label}>TEMPO (H)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={time}
              onChangeText={setTime}
            />
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        {renderSwitch('ASSISTÊNCIA NO CAMINHO', assistencia, setAssistencia)}
        {renderSwitch('PRECISA DE GUIA', precisaGuia, setPrecisaGuia)}
        <Text style={[styles.label, { marginTop: 20 }]}>RECOMENDA PARA:</Text>
        {renderSwitch('IDOSOS', idosos, setIdosos)}
        {renderSwitch('CRIANÇAS', criancas, setCriancas)}
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleCadastrarTrilha}
      >
        <Text style={styles.continueText}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
