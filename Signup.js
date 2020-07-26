import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import yosemite from './images/yosemite.jpg';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer'
import AuthApiService from './services/AuthApiService';
import { LoginContext } from './Contexts/LoginContext';

export default function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useContext(LoginContext)

    const navigation = useNavigation();

 
    // posts user info on signup
    const handleSignupSubmit = () => {
         setError(null);
         AuthApiService.postUser({
           user_name: username,
           password: password,
           full_name: name,
           email: email,
         })
         .then(user => {
         setUsername('');
         setEmail('');
         setName('');
         setPassword('');
         setSuccess(true)
         navigation.navigate('Login');
     })
       .catch(res => {
         setError( res.error );
       });
     };
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
        {!loggedIn && <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Login')}  ><Text style={styles.navListItem}>Login</Text></TouchableOpacity>}
        <TouchableOpacity
        onPress={() => navigation.navigate('Map')}>
          <Text style={styles.navListItem}>Map</Text>
        </TouchableOpacity>
        {loggedIn && 
        <TouchableOpacity
        onPress={() => navigation.navigate('AddPark')}>
          <Text style={styles.navListItem}>Suggest Park</Text>
        </TouchableOpacity>}
        </View>
    <ImageBackground style={styles.image} source={yosemite}>
        <View style={styles.form}>
            <View style={styles.headerBox}>
            <Text style={styles.header}>sign up to access user comments or to suggest a park</Text>
            {error !== null && <Text style={styles.error}>{error}</Text>}
            </View>
            <TextInput 
            onChangeText={name => setName(name)}
            value={name}
            placeholder="name"
            style={styles.searchInput}/>
            <TextInput 
            onChangeText={email => setEmail(email)}
            value={email}
            placeholder="email"
            style={styles.searchInput}/>
            <TextInput 
            onChangeText={username => setUsername(username)}
            value={username}
            placeholder="username"
            style={styles.searchInput}/>
            <TextInput 
            onChangeText={password => setPassword(password)}
            value={password}
            placeholder="password"
            style={styles.searchInput}/>
            <TouchableOpacity onPress={handleSignupSubmit}style={styles.button}>
                <Text style={styles.buttonText}>sign up</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    </View>
    <Footer/>
    </>
    )
}

const styles = StyleSheet.create({
    error: {
        fontSize: 18,
        textAlign: "center",
        padding: 20,
        borderRadius: 5,
        fontFamily: "Avenir-Medium",
        color: "red"
    },
    nav: {
        height: 60,
        backgroundColor: '#414f47',
    },
    navList: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-evenly',  
        padding: 10,
        alignItems: "center"    
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
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 5
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
        color: "white"
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
        fontFamily: "Avenir"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#414f47",
      },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start"
      },
})