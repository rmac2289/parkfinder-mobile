import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PickerExample(){
    const [activity, setActivity] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [checked, setChecked] = useState(false);

   getActivity = activity => setActivity(activity);

   const showPickerFunc = () => {
      setShowPicker(!showPicker)
   }
   const activities = ['Biking', 'Boating', 'Camping', 'Climbing', 'Fishing', 
   'Geocaching', 'Guided Tours', 'Hiking', 'Horseback Riding', 'Museum Exhibits', 
   'Off-Roading', 'Picnicking', 'SCUBA Diving', 'Skiing', 'Snorkeling', 'Surfing', 
   'Swimming', 'Wildlife Watching']

   const activityList = activities.map((v, i) => {
      return <CheckBox center title={v} key={i} checked={checked}/>
   })
      return (
         <View>
            <TouchableOpacity onPress={showPickerFunc} style={styles.button}>
                  <Text style={styles.buttonText}>Activities</Text>
               </TouchableOpacity>
            {showPicker &&
            activityList}
         </View>
      )
   }


const styles = StyleSheet.create({
   button: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      width: 120,
      marginLeft: 'auto',
      marginRight: 'auto',
   },
   buttonText: {
      textAlign: 'center',
      fontSize: 18
   },
   text: {
      fontSize: 30,
      alignSelf: 'center',
   },
})