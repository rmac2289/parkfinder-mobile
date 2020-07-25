import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




export default function Login(){
    return (
    <View>
    <View>
        <TextInput>name</TextInput>
        <TextInput>email</TextInput>
        <TextInput>username</TextInput>
        <TextInput>password</TextInput>
    </View>
    </View>
    
    )
}