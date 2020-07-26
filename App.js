import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import Login from './Login';
import Parklist from './ParkList';
import Signup from './Signup';
import { ActivityContextProvider } from './Contexts/ActivitiesContext';
import { ParkNameContextProvider } from './Contexts/ParkNameContext';
import { CommentsContextProvider } from './Contexts/CommentsContext';
import { RedirectContextProvider } from './Contexts/RedirectContext';
import { LoginContextProvider } from './Contexts/LoginContext';
import { TextContextProvider } from './Contexts/TextContext';
import MapUI from './Map';
import Park from './Park';
import AddPark from './AddPark';

const Stack = createStackNavigator();

const App = () => {

  return (
    <TextContextProvider>
    <ActivityContextProvider>
    <LoginContextProvider>
        <ParkNameContextProvider>
            <CommentsContextProvider>
                <RedirectContextProvider>
                    <NavigationContainer>
                     <Stack.Navigator>
                       <Stack.Screen
                        name="Home"
                        component={Main}
                      />
                      <Stack.Screen
                        name="Login"
                        component={Login}
                      />
                      <Stack.Screen
                        name="Parklist"
                        component={Parklist}
                      />
                      <Stack.Screen
                        name="Signup"
                        component={Signup}
                      />
                      <Stack.Screen
                        name="Map"
                        component={MapUI}
                      />
                      <Stack.Screen
                        name="Park"
                        component={Park}
                        />
                        <Stack.Screen
                        name="AddPark"
                        component={AddPark}
                        />
                    </Stack.Navigator>
                  </NavigationContainer>
              </RedirectContextProvider>
            </CommentsContextProvider>
          </ParkNameContextProvider>
        </LoginContextProvider>
      </ActivityContextProvider>
      </TextContextProvider>
  );
};

export default App;