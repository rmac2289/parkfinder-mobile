import React from 'react';
import Header from './Header';
import Search from './Search';
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

  return (
      <View >
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
        <Text style={styles.navListItem} to="/signup">Signup</Text>
        <Text style={styles.navListItem} to="/">Home</Text>
        <Text style={styles.navListItem} to="/addpark">Suggest a Park</Text>
        </View>
        </ScrollView>
    </View>
          <Header />
          <Search press={() =>
        navigation.navigate('Parklist')}/>
          <View style={styles.body}>
          </View>
        </ScrollView>
      </SafeAreaView>
      </View>
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
