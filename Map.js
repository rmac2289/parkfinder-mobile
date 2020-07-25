import MapView, { Marker } from 'react-native-maps';
import React, { useContext } from 'react';
import tree from './images/tree.png';
import {
    StyleSheet,
    Dimensions,
    View
  } from 'react-native';
import { ParkContext } from './Contexts/ParkContext';

export default function MapUI() {
    const [park] = useContext(ParkContext);
  
    const markers = park.data.map((v,i) => {
        return <Marker title={v.fullName} description={v.hours} image={tree} key={i} coordinate={{ latitude: parseFloat(v.latLng[0]), longitude: parseFloat(v.latLng[1]) }}/>
    })
    return (
        <View style={styles.container}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "#414f47"
      },
});