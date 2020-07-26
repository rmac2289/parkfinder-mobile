import React, { useContext } from 'react';
import { ParkNameContext } from './Contexts/ParkNameContext';
import { TextContext } from './Contexts/TextContext';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';

const Main = ({ navigation }) => {
  const [parkName, setParkName] = useContext(ParkNameContext);
  const [text] = useContext(TextContext)
  return (
    <>
      <ScrollView style={styles.App}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.nav} className="nav">
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
        <TouchableOpacity
        onPress={() => navigation.navigate('AddPark')}>
          <Text style={styles.navListItem}>Suggest Park</Text>
        </TouchableOpacity>
        </View>
    </View>
          <Header />
          <Search press={() => {
            setParkName(text);
        return navigation.navigate('Parklist')}
          }/>
        </ScrollView>
      </SafeAreaView>
      
      </ScrollView>
      <Footer/>
      </>
  );
};

const styles = StyleSheet.create({
  App: {
    height: Dimensions.get('window').height,
    backgroundColor: "#414f47"
  },
  scrollView: {
  },
  nav: {
    height: 60,
    backgroundColor: '#414f47',
},
navList: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',  
    padding: 10,
    alignItems: "center"    
},
navListItem: {
    marginRight: 5,
    fontSize: 18,
    color: 'white',
    paddingTop: 10,
    fontFamily: "Avenir"
},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: "Avenir"
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Main;
