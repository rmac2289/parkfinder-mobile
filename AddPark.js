import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import shasta from './images/Mt_Shasta.jpeg';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer';
import { LoginContext } from './Contexts/LoginContext';
import TokenService from './TokenService';

export default function AddPark(){
    const [parkName, setParkName] = useState('');
    const [location, setLocation] = useState('');
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    const [description, setDescription] = useState('');
    const navigation = useNavigation();

    return (
        <>
    <View style={styles.container}>
            <View style={styles.navList}>
            <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Home')}  >
            <Text style={styles.navListItem}>Home</Text>
        </TouchableOpacity>
        {loggedIn && 
        <TouchableOpacity
        onPress={() => {
            setLoggedIn(false);
            TokenService.clearAuthToken()
        }}>
          <Text style={styles.navListItem}>Logout</Text>
        </TouchableOpacity>}
        {!loggedIn && 
        <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Login')}  >
            <Text style={styles.navListItem}>Login</Text>
        </TouchableOpacity>}
        {!loggedIn && 
        <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Signup')}  >
            <Text style={styles.navListItem}>Signup</Text>
        </TouchableOpacity>}
        <TouchableOpacity
        onPress={() => navigation.navigate('Map')}>
          <Text style={styles.navListItem}>Map</Text>
        </TouchableOpacity>
        </View>
    <ImageBackground style={styles.image} source={shasta}>
        <View style={styles.form}>
            <View style={styles.headerBox}>
            <Text style={styles.header}>suggest a park</Text>
            </View>
            <TextInput 
            onChangeText={parkName => setParkName(parnkName)}
            value={parkName}
            placeholder="park name"
            style={styles.searchInput}/>
            <TextInput 
            onChangeText={location => setLocation(location)}
            value={location}
            placeholder="location"
            style={styles.searchInput}/>
            <TextInput 
            onChangeText={description => setDescription(description)}
            value={description}
            placeholder="description"
            style={styles.searchInput}/>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>submit</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    </View>
    <Footer/>
    </>
    
    )
}

const styles = StyleSheet.create({
    nav: {
        height: 60,
        backgroundColor: '#414f47',       
    },
    navList: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-evenly', 
        padding: 10,
    },
    navListItem: {
        marginRight: 5,
        fontSize: 18,
        color: 'white',
        paddingTop: 10,
        fontFamily: "Avenir"
    },
    headerBox: {
        backgroundColor: "#414f47cc",
        marginTop: 120,
        marginBottom: 50,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 22,
        color: "white",
        fontFamily: "Avenir"
     },
    button: {
        backgroundColor: '#414f47cc',
        padding: 10,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 2,
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    header: {
        fontSize: 22,
        textAlign: "center",
        padding: 20,
        borderRadius: 5,
        fontFamily: "Avenir-Medium",
        color: "white",
    },
    form: {
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",
        height: 250
    },
    searchInput: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        height: 40,
        borderRadius: 10,
        width: 400,
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#414f47"
      },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start"
      },
})