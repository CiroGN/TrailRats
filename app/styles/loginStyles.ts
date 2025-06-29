import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA726',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#FFE0B2',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxWidth: 300,
    marginBottom: 20,
  },
  label: {
    color: '#D32F2F',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF3E0',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#CCFF00',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#D32F2F',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: '#D32F2F',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default loginStyles;
