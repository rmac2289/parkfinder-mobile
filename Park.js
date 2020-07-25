
import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ParkContext } from './Contexts/ParkContext';
import { ParkNameContext } from './Contexts/ParkNameContext';
import { TouchableOpacity } from 'react-native-gesture-handler';





export default function Park(props){
    const [park, setPark] = useContext(ParkContext);

    const filtered = park.data.filter((value) => {
        return value.fullName === params.parkId
    });


return (
    <View style={styles.park}>
        <View>
            <Text></Text>
        </View>
    </View>
)

}

const styles = StyleSheet.create({
    park: {

    },
})