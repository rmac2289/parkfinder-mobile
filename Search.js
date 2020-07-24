/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import PickerExample from './Picker';


export default function Search(){

    const [value, onChangeText] = useState('');
    return (
    <View style={styles.search}>
        <View style={styles.searchContainer}>
        <TextInput
            style={styles.searchInput}
            onChangeText={text => onChangeText(text)}
            value={value}
    />
    <PickerExample/>
        <Button style={styles.button} color="white" title="search"/>
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
        padding: '1%',
        width: 200
    }
});