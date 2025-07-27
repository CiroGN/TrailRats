import { StyleSheet } from 'react-native';

const feedStyles = StyleSheet.create({
  imagemCapa: {
  width: '100%',
  height: 150,
  borderRadius: 10,
  marginBottom: 10,
},
trilhaResumo: {
  fontSize: 14,
  color: '#555',
  marginTop: 4,
},
loadingContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
container: {
  flex: 1,
  backgroundColor: '#FFA726',
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

export default feedStyles;
