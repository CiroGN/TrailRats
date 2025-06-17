import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';

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

  const renderCircles = (selected: number, setSelected: (v: number) => void) => {
    return (
      <View style={styles.circleRow}>
        {[1, 2, 3, 4, 5].map((val) => (
          <TouchableOpacity
            key={val}
            onPress={() => setSelected(val)}
            style={[styles.circle, selected >= val ? styles.circleSelected : {}]}
          />
        ))}
      </View>
    );
  };

  const renderSwitch = (label: string, value: boolean, setValue: (v: boolean) => void) => (
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
        {renderSwitch('ASSISTENCIA NO CAMINHO', assistencia, setAssistencia)}
        {renderSwitch('PRECISA DE GUIA', precisaGuia, setPrecisaGuia)}
        <Text style={[styles.label, { marginTop: 20 }]}>RECOMENDA PARA:</Text>
        {renderSwitch('IDOSOS', idosos, setIdosos)}
        {renderSwitch('CRIANÇAS', criancas, setCriancas)}
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => console.log('Continuar')}
      >
        <Text style={styles.continueText}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFA44F',
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#FFD18B',
    marginTop: 20,
    borderRadius: 25,
    padding: 20,
    width: '90%',
  },
  label: {
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#FFF1D6',
  },
  circleRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
    marginTop: 5,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  circleSelected: {
    backgroundColor: '#000',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  continueButton: {
    marginTop: 30,
    backgroundColor: '#E9FF00',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  continueText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
