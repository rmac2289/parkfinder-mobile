
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ParkContext } from './Contexts/ParkContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FullParkNameContext } from './Contexts/ParkNameContext';
import Nav from './Nav';



export default function Park(props){
    const [park, setPark] = useContext(ParkContext);
    const [fullParkName, setFullParkName] = useContext(FullParkNameContext);
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(null);
    const navigation = useNavigation()
    const filtered = park.data.filter((value) => {
        return value.fullName === fullParkName
    });
    const filterFunc = (value) => {
        if (value.fullName === fullParkName){
            return value.latLng
        };
    }
    useEffect(() => {
        const latLngFilter = park.data.filter(filterFunc);
        const lat = latLngFilter[0].latLng[0]
        const long = latLngFilter[0].latLng[1]
        const weatherUrl = `https://api.weather.gov/points/${lat},${long}`
       fetch(weatherUrl)
       .then(res => res.json())
       .then(data => {
           return fetch(data.properties.forecast)
           .then(res => res.json())
           .then(data => {
               if (data.periods){
                   setWeather(data.periods)
               } else {
               setWeather(data.properties.periods)
               }
            })
            .catch(error => setError(error.message))
       });
    },[])


return (
    <ScrollView style={styles.park}>
        <View style={styles.nav} className="nav">
        <ScrollView className="nav-list">
            <View style={styles.navList}>
        <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Login')}  ><Text style={styles.navListItem}>Login</Text></TouchableOpacity>
        <Text style={styles.navListItem} to="/">Logout</Text>
        <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Signup')}  ><Text style={styles.navListItem}>Signup</Text></TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Map')}>
          <Text style={styles.navListItem}>Map</Text>
        </TouchableOpacity>
        <Text style={styles.navListItem} to="/addpark">Suggest a Park</Text>
        </View>
        </ScrollView>
    </View>
        <View style={styles.parkContainer}>
            <Text style={styles.header}>{filtered[0].fullName}</Text>
            {filtered[0].description && <Text style={styles.hoursLight}>{filtered[0].description}</Text>}
            <Text style={styles.hours}>Hours: <Text style={styles.hoursLight}>{filtered[0].hours}</Text></Text>
            <View style={styles.mainContainer}>
            {error !== null ? <Text style={styles.weatherError}>Hmm, something went wrong. Please refresh or try again later.</Text>:
            <ScrollView style={styles.weatherBox}>
                <Text style={styles.weatherHeader}>Weather</Text>
            {weather.length !== 0 ? weather.map((v,i) => {
                    return <View style={styles.weather} key={i}>
                                <Text style={styles.weatherName}>{v.name}</Text>
                                <View style={styles.textBox}>
                                    <Text style={styles.weatherText}>{v.temperature}&#176;F </Text>
                                    <Text style={styles.weatherText}>{v.shortForecast}</Text>
                                </View>
                            </View>}): <Text style={styles.weatherText}>Loading</Text>}
                            </ScrollView>}
                        <View style={styles.imageBox}>
                        {filtered[0].images.map((v, i) => {
                        return <Image key={i} style={
                            {
                                borderRadius: 5, 
                                marginTop: 5, 
                                marginLeft: "auto", 
                                marginRight: "auto", 
                                height:150, 
                                width:170, 
                                backgroundColor: "white"}
                            } source={{uri: v.url}}/> 
                        })}
                        </View>
                </View>
        </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
    weatherHeader: {
        fontSize: 28,
        color: "white",
        fontWeight: "800",
        textAlign: "center",
        padding: 10,
    },
    mainContainer: {
        borderRadius: 5,
        width: "95%",
        backgroundColor: "#414f47",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: "row",
        minHeight: 160
    },
    weatherName: {
        fontWeight: "800",
        color: "white",
        textAlign: "center"
    },
    weatherText: {
        color: "white",
        textAlign: "center"
    },
    textBox: {},
    weatherError: {
        color: "white",
        padding: 2,
        margin: 5,
        flex: 1,
    },
    weatherBox: {
        color: "white",
        backgroundColor: "#414f47",
        borderRadius: 5,
        flex: 1
    },
    imageBox: {
        flex: 1
    },
    weather: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        borderRadius: 20
    },
    hours: {
        fontWeight: "800",
        fontSize: 18,
        padding: 5,
        fontFamily: "Avenir",
    },
    hoursLight: {
        fontWeight: "normal",
        fontSize: 18,
        padding: 5,
        fontFamily: "Avenir",
    },
    park: {
        backgroundColor: "#414f47",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    header: {
        fontFamily: "AvenirNext-Medium",
        fontSize: 30,
        textAlign: "center"
    },
    parkContainer: {
        width: "95%",
        backgroundColor: "white",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 5,
        minHeight: 400,
    },
    nav: {
        height: 50,
        backgroundColor: '#414f47',
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
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
    },
})