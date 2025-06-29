import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA44F', // cor padrão do app
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  topSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#FFD18B',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
  },
  cameraButton: {
    backgroundColor: '#FFD18B',
    padding: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  cameraIcon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  plusOverlay: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFA726',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  plusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },
});

export default styles;
