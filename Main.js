import React, { useContext } from 'react';
import { ParkNameContext } from './Contexts/ParkNameContext';
import { TextContext } from './Contexts/TextContext';
import Header from './Header';
import Search from './Search';
import MapUI from './Map';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';

const Main = ({ navigation }) => {
  const [parkName, setParkName] = useContext(ParkNameContext);
  const [text] = useContext(TextContext)
  return (
      <ScrollView >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
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
          <Header />
          <Search press={() => {
            setParkName(text);
        return navigation.navigate('Parklist')}
          }/>
        </ScrollView>
      </SafeAreaView>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  nav: {
    height: 50,
    backgroundColor: '#414f47',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
