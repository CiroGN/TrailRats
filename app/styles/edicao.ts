// EditProfileScreen.styles.js
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
    marginBottom: 20,
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
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#000',
  },
  avatarText: {
    fontSize: 12,
    color: '#555',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#FFF1D6',
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  cancelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#D4FF00',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  saveText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
