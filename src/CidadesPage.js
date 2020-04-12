import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Picker, TouchableOpacity, Text } from 'react-native';

function CidadesPage({ route, navigation }) {
  var [Cidade, setCidade] = useState("");
  var [Data, setData] = useState([]);
  const { UF } = route.params;

  useEffect(
    () => {
      axios.get(`https://api.cnptia.embrapa.br/agritec/v1/municipios?uf=${UF}`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: 'application/json',
          'Authorization': 'Bearer 2604e7a7-7200-3fd1-914b-41cf9f540696'
        }
      }).then(
        response => setData(Data = Object.values(response["data"])[0])
      )
    },
    [UF]
  )

  return (
    <View style={styles.container}>
      <Image
        source={require('../src/assets/tractor.png')}
        style={styles.logo}
      />
      <View style={styles.pickerStyle}>
        <Picker
          style={styles.pickerStyle}
          mode='dropdown'
          selectedValue={Cidade}
          onValueChange={(itemValue, itemIndex) => setCidade(Cidade = itemValue)} >

          <Picker.Item label="Cidade" value="" color="#00000090" />
          {Data.map((item, key) => (
            console.log(Data),
            <Picker.Item label={item["nome"]} value={item["nome"]} key={key} />
          ))}

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