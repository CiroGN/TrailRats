import { StyleSheet } from 'react-native';

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

export default styles;
