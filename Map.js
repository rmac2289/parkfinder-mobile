import MapView, { Marker } from 'react-native-maps';
import React, { useContext } from 'react';
import tree from './images/tree.png';
import {
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
    Text
  } from 'react-native';
import { ParkContext } from './Contexts/ParkContext';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';

export default function MapUI() {
    const [park] = useContext(ParkContext);
    const navigation = useNavigation();

    const markers = park.data.map((v,i) => {
        return <Marker title={v.fullName} description={v.hours} image={tree} key={i} coordinate={{ latitude: parseFloat(v.latLng[0]), longitude: parseFloat(v.latLng[1]) }}/>
    })
    return (
      <>
      <View style={styles.container}>
      <View style={styles.nav} className="nav">
            <View style={styles.navList}>
            <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Home')}  >
            <Text style={styles.navListItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Login')}  ><Text style={styles.navListItem}>Login</Text></TouchableOpacity>
        <TouchableOpacity 
      onPress={() =>
        navigation.navigate('Signup')}  ><Text style={styles.navListItem}>Signup</Text></TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Map')}>
          <Text style={styles.navListItem}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('AddPark')}>
          <Text style={styles.navListItem}>Suggest Park</Text>
        </TouchableOpacity>
        </View>
    </View>
        
          
        <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 36.9915,
          longitude: -119.7889,
          latitudeDelta: 9,
          longitudeDelta: 9,
        }}
      >
         {markers}
      </MapView>
      </View>
      <Footer/>
      </>
    )
}

const styles = StyleSheet.create({
  nav: {
    height: 80,
    backgroundColor: '#414f47',
    width: "100%",
    justifyContent: "center"

},
navList: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',  
    alignItems: "center",
    marginTop: 20    
},
navListItem: {
    marginRight: 5,
    fontSize: 18,
    color: 'white',
    paddingTop: 10,
    fontFamily: "Avenir",
},
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 120,
        backgroundColor: "#414f47"
      },
});