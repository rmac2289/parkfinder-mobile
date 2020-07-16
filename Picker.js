import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function PickerExample(){
    const [activity, setActivity] = useState('')
   
   getActivity = activity => setActivity(activity)
  
      return (
         <View>
            <Picker selectedValue = {activity} onValueChange = {getActivity}>
               <Picker.Item label = "Camping" value = "camping" />
               <Picker.Item label = "Hiking" value = "hiking" />
               <Picker.Item label = "Biking" value = "biking" />
            </Picker>
         </View>
      )
   }


const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red',
   },
})