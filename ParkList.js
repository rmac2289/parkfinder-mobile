import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ParkContext } from './Contexts/ParkContext';
import { ParkNameContext } from './Contexts/ParkNameContext';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Parklist(){
    const [parkName] = useContext(ParkNameContext)
    const [park] = useContext(ParkContext)
    const parksToDisplay = park.data.filter((v) => {
        return v.fullName.toLowerCase().includes(parkName.toLowerCase())
     });

    // maps parksToDisplay to show parks matching park name
    const parkList = parksToDisplay.map((v,i) => {
        return <View className="park-list-item" key={i}>
            
            <TouchableOpacity style={styles.button} to={`/park/${v.fullName}`}>
                <Text style={styles.parkName}>{v.fullName}</Text>
            </TouchableOpacity>
          
        </View>
    });

    return (
    <ScrollView style={styles.parkListBox}>
        <View style={styles.listBox}>
            {parkList}
        </View>
    </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    parkListBox: {
        backgroundColor: "#414f47",
    },
    listBox: {
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    parkName: {
        color: "white",
        padding: 3,
    },
    button: {
        padding: 2,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "rgba(255,255,255,0.3)"
    }
})