/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';




export default function Header(){
    return (
    <View style={styles.header}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>find your park</Text>
            <Text style={styles.headerP}>Search for California parks by name or narrow your search
                by what activities are offered - once you find what you're looking for,
                check out the park details and comments left by other users. If you've experienced the park
                yourself, sign up for an account and leave your own comments. Don't see your local park listed?
                Head to the 'Suggest a Park' link above and submit it for review.
            </Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#414f47',
        padding: '2%',
    },
    headerContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    headerText: {
        color: 'white',
        fontSize: 55,
        marginBottom: 0,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: '2%',
        marginBottom: 20
    },
    headerP: {
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18,
        padding: '2%'
    }

});

