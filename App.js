import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import Login from './Login';
import Parklist from './ParkList';
import { ParkContextProvider } from './Contexts/ParkContext';
import { ActivityContextProvider } from './Contexts/ActivitiesContext';
import { ParkNameContextProvider } from './Contexts/ParkNameContext';
import { CommentsContextProvider } from './Contexts/CommentsContext';
import { RedirectContextProvider } from './Contexts/RedirectContext';
import { LoginContextProvider } from './Contexts/LoginContext';
import { TextContextProvider } from './Contexts/TextContext';

const Stack = createStackNavigator();

const App = () => {

  return (
    <TextContextProvider>
    <ActivityContextProvider>
    <LoginContextProvider>
        <ParkNameContextProvider>
            <CommentsContextProvider>
                <RedirectContextProvider>
                  <ParkContextProvider>
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
                    </Stack.Navigator>
                  </NavigationContainer>
                </ParkContextProvider>
              </RedirectContextProvider>
            </CommentsContextProvider>
          </ParkNameContextProvider>
        </LoginContextProvider>
      </ActivityContextProvider>
      </TextContextProvider>
  );
};

export default App;