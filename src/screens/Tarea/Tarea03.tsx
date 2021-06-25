import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Tarea03 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#284258',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    // flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    // flex: 1,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
    alignSelf: 'center',
  },

});
