import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ParkContext } from './Contexts/ParkContext';
import { ParkNameContext } from './Contexts/ParkNameContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivitiesContext } from './Contexts/ActivitiesContext';
import { FullParkNameContext } from './Contexts/ParkNameContext'
import { useNavigation } from '@react-navigation/native'


export default function Parklist(){
    const [parkName, setParkName] = useContext(ParkNameContext)
    const [fullParkName, setFullParkName] = useContext(FullParkNameContext)
    const [park] = useContext(ParkContext)
    const [activities] = useContext(ActivitiesContext);
    const navigation = useNavigation();
     function compare(a, b) {
        const nameA = a.fullName.toUpperCase();
        const nameB = b.fullName.toUpperCase();
      
        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      };
      const checker = (parksData) => activities.every(v => parksData.activities.includes(v));
    
    // maps/filters to show parks matching ANY activities
    const activitiesList = park.data.sort(compare).filter(checker).map((v,i) => {
        return <View key={i + 400}>
            <TouchableOpacity style={styles.button} to={`/park/${v.fullName}`}>
                <Text style={styles.parkName}>{v.fullName}</Text>
            </TouchableOpacity>
        </View>
    });
      const parksToDisplay = park.data.filter((v) => {
        return v.fullName.toLowerCase().includes(parkName.toLowerCase())
     });

    // maps parksToDisplay to show parks matching park name
    const parkList = parksToDisplay.sort(compare).map((v,i) => {
        return <View key={i}>
            
            <TouchableOpacity onPress={() => {
                setFullParkName(v.fullName);
                return navigation.navigate("Park")
            }} style={styles.button} >
                <Text style={styles.parkName}>{v.fullName}</Text>
            </TouchableOpacity>
          
        </View>
    });

    return (
    <ScrollView style={styles.parkListBox}>
        <View style={styles.listBox}>
            {!parkList.length ? <Text>Sorry, no parks match that search!</Text>:activities.length > 0 && parkName !== '' ? activitiesList.concat(parkList):activities.length > 0 && parkName === '' ? activitiesList: parkList}
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