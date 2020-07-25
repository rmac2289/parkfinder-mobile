/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import Activities from './Picker';
import { TextContext } from './Contexts/TextContext';

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
        <Button onPress={props.press} style={styles.button} color="white" title="search"/>
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
    button: {
        borderWidth: 1,
        borderColor: 'white'
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
        fontSize: 18
    }
});