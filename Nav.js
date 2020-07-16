import React, { useContext } from 'react';
import { View, ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';
export default function Nav(){
    return (
    <View style={styles.nav} className="nav">
        <ScrollView className="nav-list">
            <View style={styles.navList}>
        <Text style={styles.navListItem} id="login" className="nav-Text" to="/login">Login</Text>
        <Text style={styles.navListItem} to="/">Logout</Text>
        <Text style={styles.navListItem} to="/signup">Signup</Text>
        <Text style={styles.navListItem} to="/">Home</Text>
        <Text style={styles.navListItem} to="/addpark">Suggest a Park</Text>
        </View>
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        height: 50,
        backgroundColor: '#414f47',
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navList: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',        
    },
    navListItem: {
        marginRight: 5,
        fontSize: 18,
        color: 'white',
        paddingTop: 10
    }
})