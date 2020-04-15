import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Picker, TouchableOpacity, Text } from 'react-native';
import getCulturas from './services/apiCulturas'

function CulturasPage({ route, navigation }) {
    var [Cultura, setCultura] = useState("");
    var [Data, setData] = useState([]);
    const { CODIGO } = route.params;

    useEffect(
        () => {
            getCulturas().then(
                response => setData(Data = Object.values(response["data"])[0])
            )
        },
        [CODIGO]
    )

    return (
        console.log(CODIGO),
        console.log(Cultura),
        <View style={styles.container}>
            <Image
                source={require('../src/assets/tractor.png')}
                style={styles.logo}
            />
            <View style={styles.pickerStyle}>
                <Picker
                    style={styles.pickerStyle}
                    mode='dropdown'
                    selectedValue={Cultura}
                    onValueChange={(itemValue, itemIndex) => setCultura(Cultura = itemValue)} >

                    <Picker.Item label="Cultura" value="" color="#00000090" />
                    {Data.map((item, key) => (
                        <Picker.Item label={item["cultura"]} value={item["id"]} key={key} />
                    ))}

                </Picker>
            </View>
            <TouchableOpacity style={styles.botao}
                onPress={() => navigation.navigate('ZoneamentoPage', { CODIGO: CODIGO, ID: Cultura })}
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

export default CulturasPage;