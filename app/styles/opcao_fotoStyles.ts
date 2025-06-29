import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#834D1A',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    width: '100%',
    backgroundColor: '#A98D62',
    paddingVertical: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  optionButton: {
    backgroundColor: '#FFD76D',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    width: 220,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  imageList: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  advanceButton: {
    marginTop: 30,
    backgroundColor: '#A98D62',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  advanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
