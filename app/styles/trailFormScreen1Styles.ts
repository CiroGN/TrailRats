import { StyleSheet } from 'react-native';

const trailFormStyles = StyleSheet.create({
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

export default trailFormStyles;
