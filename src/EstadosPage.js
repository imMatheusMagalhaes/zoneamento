import React, { useState } from 'react';
import { View, StyleSheet, Image, Picker, TouchableOpacity, Text } from 'react-native';

function EstadosPage({ navigation }) {
  
  [uf, setuf] = useState("")
  console.log(uf)
  return (
    uf,
    <View style={styles.container}>
      <Image
        source={require('../src/assets/tractor.png')}
        style={styles.logo}
      />
      <View style={styles.pickerStyle}>
        <Picker
          style={styles.pickerStyle}
          mode='dropdown'
          selectedValue={uf}
          onValueChange={(itemValue, itemIndex) => setuf(uf = itemValue)} >

          <Picker.Item label="Estado" value="" color="#00000090" />
          <Picker.Item label="RO" value="RO" />
          <Picker.Item label="AC" value="AC" />
          <Picker.Item label="AM" value="AM" />
          <Picker.Item label="RR" value="RR" />
          <Picker.Item label="PA" value="PA" />
          <Picker.Item label="AP" value="AP" />
          <Picker.Item label="TO" value="TO" />
          <Picker.Item label="MA" value="MA" />
          <Picker.Item label="PI" value="PI" />
          <Picker.Item label="CE" value="CE" />
          <Picker.Item label="RN" value="RN" />
          <Picker.Item label="PB" value="PB" />
          <Picker.Item label="PE" value="PE" />
          <Picker.Item label="AL" value="AL" />
          <Picker.Item label="SE" value="SE" />
          <Picker.Item label="BA" value="BA" />
          <Picker.Item label="MG" value="MG" />
          <Picker.Item label="ES" value="ES" />
          <Picker.Item label="RJ" value="RJ" />
          <Picker.Item label="SP" value="SP" />
          <Picker.Item label="PR" value="PR" />
          <Picker.Item label="SC" value="SC" />
          <Picker.Item label="RS" value="RS" />
          <Picker.Item label="MS" value="MS" />
          <Picker.Item label="MT" value="MT" />
          <Picker.Item label="GO" value="GO" />
          <Picker.Item label="DF" value="DF" />

        </Picker>
      </View>

      <TouchableOpacity style={styles.botao}
        onPress={() => navigation.navigate('CidadesPage')}
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
export default EstadosPage;