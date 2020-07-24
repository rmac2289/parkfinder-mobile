import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PickerExample(){
    const [activity, setActivity] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const [bikingChecked, setBikingChecked] = useState(false);
    const [hikingChecked, setHikingChecked] = useState(false);
    const [campingChecked, setCampingChecked] = useState(false);
    const [boatingChecked, setBoatingChecked] = useState(false);
    const [climbingChecked, setClimbingChecked] = useState(false);
    const [fishingChecked, setFishingChecked] = useState(false);
    const [geocachingChecked, setGeocachingChecked] = useState(false);
    const [guidedToursChecked, setGuidedToursChecked] = useState(false);
    const [horsebackRidingChecked, setHorsebackRidingChecked] = useState(false);
    const [museumExhibitsChecked, setMuseumExhibitsChecked] = useState(false);
    const [offRoadingChecked, setOffRoadingChecked] = useState(false);
    const [picnickingChecked, setPicnickingChecked] = useState(false);
    const [scubaChecked, setScubaChecked] = useState(false);
    const [snorkelingChecked, setSnorkelingChecked] = useState(false);
    const [skiingChecked, setSkiingChecked] = useState(false);
    const [surfingChecked, setSurfingChecked] = useState(false);
    const [swimmingChecked, setSwimmingChecked] = useState(false);
    const [wildlifeChecked, setWildlifeChecked] = useState(false);
   getActivity = activity => setActivity(activity);
  
   const showPickerFunc = () => {
      setShowPicker(!showPicker)
   }
   const pressBiking = () => {
      setBikingChecked(!bikingChecked)
   }
   const pressHiking = () => {
      setHikingChecked(!hikingChecked)
   }
   const pressCamping= () => {
      setCampingChecked(!campingChecked)
   }
   const pressPicnicking = () => {
      setPicnickingChecked(!picnickingChecked)
   }
   const pressWildlife = () => {
      setWildlifeChecked(!wildlifeChecked)
   }
   const pressScuba = () => {
      setScubaChecked(!scubaChecked)
   }
   const pressSnorkeling = () => {
      setSnorkelingChecked(!snorkelingChecked)
   }
   const pressClimbing = () => {
      setClimbingChecked(!climbingChecked)
   }
   const pressSurfing = () => {
      setSurfingChecked(!surfingChecked)
   }
   const pressFishing = () => {
      setFishingChecked(!fishingChecked)
   }
   const pressGeocaching = () => {
      setGeocachingChecked(!geocachingChecked)
   }
   const pressGuidedTours = () => {
      setGuidedToursChecked(!guidedToursChecked)
   }
   const pressHorsebackRiding = () => {
      setHorsebackRidingChecked(!horsebackRidingChecked)
   }
   const pressMuseumExhibits = () => {
      setMuseumExhibitsChecked(!museumExhibitsChecked)
   }
   const pressOffRoading = () => {
      setOffRoadingChecked(!offRoadingChecked)
   }
   const pressSwimming = () => {
      setSwimmingChecked(!swimmingChecked)
   }
   const pressBoating = () => {
      setBoatingChecked(!boatingChecked)
   }
   const pressSkiing = () => {
      setSkiingChecked(!skiingChecked)
   }
      return (
         <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={showPickerFunc} style={styles.button}>
                  <Text style={styles.buttonText}>Activities</Text>
               </TouchableOpacity>
            {showPicker &&
            <View style={styles.checkboxContainer}>
            <View style={styles.checkboxes}>
            <TouchableOpacity style={!bikingChecked ? styles.checkbox:styles.checked} onPress={pressBiking}>
                  <Text style={!bikingChecked ? styles.text:styles.textChecked}>Biking</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!boatingChecked ? styles.checkbox:styles.checked}  onPress={pressBoating}>
                  <Text style={!boatingChecked ? styles.text:styles.textChecked}>Boating</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!campingChecked ? styles.checkbox:styles.checked} onPress={pressCamping}>
                  <Text style={!campingChecked ? styles.text:styles.textChecked}>Camping</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!climbingChecked ? styles.checkbox:styles.checked} onPress={pressClimbing}>
                  <Text style={!climbingChecked ? styles.text:styles.textChecked}>Climbing</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!fishingChecked ? styles.checkbox:styles.checked} onPress={pressFishing}>
                  <Text style={!fishingChecked ? styles.text:styles.textChecked}>Fishing</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!geocachingChecked ? styles.checkbox:styles.checked} onPress={pressGeocaching}>
                  <Text style={!geocachingChecked ? styles.text:styles.textChecked}>Geocaching</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!guidedToursChecked ? styles.checkbox:styles.checked} onPress={pressGuidedTours}>
                  <Text style={!guidedToursChecked ? styles.text:styles.textChecked}>Guided Tours</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!hikingChecked ? styles.checkbox:styles.checked} onPress={pressHiking}>
                  <Text style={!hikingChecked ? styles.text:styles.textChecked}>Hiking</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!horsebackRidingChecked ? styles.checkbox:styles.checked} onPress={pressHorsebackRiding}>
                  <Text style={!horsebackRidingChecked ? styles.text:styles.textChecked}>Horseback Riding</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.checkboxes}>
               <TouchableOpacity style={!museumExhibitsChecked ? styles.checkbox:styles.checked} onPress={pressMuseumExhibits}>
                  <Text style={!museumExhibitsChecked ? styles.text:styles.textChecked}>Museum Exhibits</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!offRoadingChecked ? styles.checkbox:styles.checked} onPress={pressOffRoading}>
                  <Text style={!offRoadingChecked ? styles.text:styles.textChecked}>Off-Roading</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!picnickingChecked ? styles.checkbox:styles.checked} onPress={pressPicnicking}>
                  <Text style={!picnickingChecked ? styles.text:styles.textChecked}>Picnicking</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!scubaChecked ? styles.checkbox:styles.checked} onPress={pressScuba}>
                  <Text style={!scubaChecked ? styles.text:styles.textChecked}>Scuba Diving</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!skiingChecked ? styles.checkbox:styles.checked} onPress={pressSkiing}>
                  <Text style={!skiingChecked ? styles.text:styles.textChecked}>Skiing</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!snorkelingChecked ? styles.checkbox:styles.checked} onPress={pressSnorkeling}>
                  <Text style={!snorkelingChecked ? styles.text:styles.textChecked}>Snorkeling</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!surfingChecked ? styles.checkbox:styles.checked} onPress={pressSurfing}>
                  <Text style={!surfingChecked ? styles.text:styles.textChecked}>Surfing</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!swimmingChecked ? styles.checkbox:styles.checked} onPress={pressSwimming}>
                  <Text style={!swimmingChecked ? styles.text:styles.textChecked}>Swimming</Text>
               </TouchableOpacity>
               <TouchableOpacity style={!wildlifeChecked ? styles.checkbox:styles.checked} onPress={pressWildlife}>
                  <Text style={!wildlifeChecked ? styles.text:styles.textChecked}>Wildlife Watching</Text>
               </TouchableOpacity>
            </View>
         </View>}
      </View>
        
      )
   }


const styles = StyleSheet.create({
   text: {
      color: "#414f47",
      fontSize: 20
   },
   textChecked: {
      color: "white",
      fontSize: 20
   },
   checked: {
      backgroundColor: "#414f47",
      borderColor: "white",
      color: "white",
      borderWidth: 1,
      padding: 5,
      width: 175,
      marginBottom: 5,
      borderRadius: 5,
      alignItems: "center",
      width: 190,
   },
   pickerContainer: {
      marginTop: 10,
      marginBottom: 10
   },
   checkboxContainer: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "grey",
      borderRadius: 10,
      padding: 2,
   },
   checkboxes: {
      marginTop: 5,
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      borderRadius: 20,
   },
   checkbox: {
      backgroundColor: 'white',
      padding: 4,
      width: 190,
      marginBottom: 5,
      borderRadius: 3,
      alignItems: "center"
   },
   button: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      width: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: "lightgrey"
   },
   buttonText: {
      textAlign: 'center',
      fontSize: 22,
      color: "#414f47"
      
   },
})