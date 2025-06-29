import { StyleSheet } from 'react-native';

const bemVindoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA726', // Laranja igual Login/Cadastro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#CCFF00',
    width: '80%',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#D32F2F',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoImage: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
    marginTop: 40,
  },
});

export default bemVindoStyles;
