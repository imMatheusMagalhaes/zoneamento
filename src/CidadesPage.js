import React, { useState } from 'react';
import { View, StyleSheet, Image, Picker, TouchableOpacity, Text } from 'react-native';
import getCidades from './services/apiCidades';

function CidadesPage({ navigation }) {
  const [cidade, setcidade] = useState("")


  return (
    cidade,
    <View style={styles.container}>
      <Image
        source={require('../src/assets/tractor.png')}
        style={styles.logo}
      />
      <View style={styles.pickerStyle}>
        <Picker
          style={styles.pickerStyle}
          mode='dropdown'
          selectedValue={cidade}
          onValueChange={(itemValue, itemIndex) => setcidade(cidade = itemValue)} >

          <Picker.Item label="Cidade" value="" color="#00000090" />

          {getCidades("DF").then(
            (response) => { console.log(response) }
          )}

        </Picker>
      </View>

      <TouchableOpacity style={styles.botao}
      >
        <Text
          style={styles.textButton}
        >Próximo</Text>

      </TouchableOpacity>

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

  },
  botao: {
    marginTop: 30,
    backgroundColor: '#27ae60',
    width: 120,
    height: 45,
    borderRadius: 8,
    alignSelf: 'center'
  },
  textButton: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 16
  },
  pickerStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 350,
    borderRadius: 8
  }
})

export default CidadesPage;