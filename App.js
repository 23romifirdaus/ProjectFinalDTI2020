import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  FlatList, 
  TouchableOpacity,
  BackHandler
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screen/HomeScreen';
import RegistrasiScreen from './src/screen/RegistrasiScreen';
import LoginScreen from './src/screen/LoginScreen';
import HistoryScreen from './src/screen/HistoryScreen';
import SettingsScreen from './src/screen/SettingsScreen';
import UbahProfileScreen from './src/screen/UbahProfileScreen';
import KeluhanScreen from './src/screen/KeluhanScreen';
import GantiPasswordScreen from './src/screen/GantiPasswordScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const IconBottom = (props) => {
  const { color, focused } = props.data
  let colorSelected = focused ? color : 'grey'
  return (
      <View>
          <Image source={props.image} style={{ width: 40, height: 40, tintColor: colorSelected }} />
      </View>
  )
}

function LoginStack() {
  return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FABC8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function RegistrasiStack() {
  return (
      <Stack.Navigator
        initialRouteName="Registrasi"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FABC8'},
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Registrasi"
          component={RegistrasiScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function HistoryStack() {
  return (
      <Stack.Navigator
        initialRouteName="History"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FABC8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Riwayat Transaksi"
          component={HistoryScreen}/>
      </Stack.Navigator>
  );
}

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FABC8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FABC8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings'}}/>
      </Stack.Navigator>
  );
}

function UbahProfileStack() {
  return (
      <Stack.Navigator
        initialRouteName="UbahProfile"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FABC8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Ubah Profile"
          component={UbahProfileScreen}
          options={{headerBackTitle: null}}/>
      </Stack.Navigator>
  );
}

function KeluhanStack() {
  return (
      <Stack.Navigator
        initialRouteName="Keluhan"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FABC8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Lapor Keluhan"
          component={KeluhanScreen}
          options={{headerBackTitle: null}}/>
      </Stack.Navigator>
  );
}

function GantiPasswordStack() {
  return (
      <Stack.Navigator
        initialRouteName="GantiPassword"
        screenOptions={{
          headerStyle: { backgroundColor: '#4FABC8' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Ganti Password"
          component={GantiPasswordScreen}
          options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

function HomeTabs() {
  return (

    
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#4FABC8',
      style: { height: 60}
  }}
  >
      <Tab.Screen name="Home" component={HomeStack}
                options={{
                    title: "Home",

                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./src/img/icon_home.png')} />
                    )
                }}
            />
      <Tab.Screen name="History" component={HistoryStack}
                options={{
                    title: "History",
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./src/img/icon_history.png')} />
                    )
                }} />
      <Tab.Screen name="Settings" component={SettingsStack}
                options={{
                    title: "Settings",
                    tabBarIcon: (props) => (
                        <IconBottom data={props} image={require('./src/img/icon_profile.png')} />
                    )
                }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginStack} options={{headerShown: false}}/>
      <Stack.Screen name="Registrasi" component={RegistrasiStack} options={{
          title: 'Registrasi Akun',
          headerStyle: {
          backgroundColor: '#4FABC8',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}}/>
      <Stack.Screen name="UbahProfile" component={UbahProfileStack} options={{headerShown: false}}/>
      <Stack.Screen name="Keluhan" component={KeluhanStack} options={{headerShown: false}}/>
      <Stack.Screen name="GantiPassword" component={GantiPasswordStack} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;