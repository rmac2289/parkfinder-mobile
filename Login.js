import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




export default function Login(){
    return (
    <View>
    <View>
        <TextInput>username</TextInput>
        <TextInput>password</TextInput>
    </View>
    </View>
    
    )
}