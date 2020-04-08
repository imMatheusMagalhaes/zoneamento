import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CidadesPage from './CIdadesPage';

function EstadosPage ({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../src/assets/tractor.png')}
        style={styles.logo}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150

  }
})

export default CidadesPage;