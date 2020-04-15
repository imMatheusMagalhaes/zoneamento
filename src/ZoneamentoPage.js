import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import getZoneamento from './services/apiZoneamento';

function ZoneamentoPage({ route, navigation }) {

    var [Data, setData] = useState([]);
    const { CODIGO, ID } = route.params;

    useEffect(
        () => {
            getZoneamento(CODIGO, ID).then(
                response => setData(Data = Object.values(response["data"])[0])
            )
        },
        [CODIGO]
    )

    return (
        <View style={style.container}>
        {console.log(Data)}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default ZoneamentoPage;