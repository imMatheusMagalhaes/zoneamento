import React, { Component } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PickerEstados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "",
            condicaoPicker: false,

        }
    }

    render() {
        console.log(this.state.selectedValue)
        return (
            <View >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pickerStyle: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 350,
        borderRadius: 8
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
    }
});