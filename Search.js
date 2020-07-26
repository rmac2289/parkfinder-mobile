/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import Activities from './Picker';
import { TextContext } from './Contexts/TextContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Search(props){
    const [text, setText] = useContext(TextContext);

    return (
    <View style={styles.search}>
        <View style={styles.searchContainer}>
        <TextInput
            style={styles.searchInput}
            onChangeText={text => setText(text)}
            value={text}
            placeholder="Park name..."
    />
        <Activities/>
        <TouchableOpacity onPress={props.press} style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    search: {
        display: 'flex',
        alignItems: 'center',
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '2%',
        paddingTop: 25,
        backgroundColor: '#414f47',
        width: '100%' ,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 22,
        color: "white",
        fontFamily: "Avenir"
        
     },
    button: {
        backgroundColor: '#414f47',
        padding: 10,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 2,
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    searchContainer: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    searchInput: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        height: 40,
        borderRadius: 10,
        width: 400,
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: "Avenir"
    }
});