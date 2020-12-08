// In App.js in a new project

import * as React from 'react';
import Axios from 'axios';
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
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CardView from 'react-native-cardview'

const LoginScreen = ({ navigation }) => {
  return (
    <View
        style={{
          paddingTop: 20,
          marginRight: 28,
          marginLeft: 28
        }}
      >
        <TextInput
        placeholder="Email"
        style={{
          height: 40,
          borderColor: '#A9A9A9', 
          borderWidth: 1,
          borderBottomWidth: 1,
          marginBottom: 10,
          borderRadius: 7
        }}
        />
        <TextInput
        placeholder="Password"
        style={{
          height: 40, 
          borderColor: '#A9A9A9', 
          borderWidth: 1,
          borderBottomWidth: 1,
          marginBottom: 20,
          borderRadius: 7
        }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Registrasi')}>      
          <Text 
          style={{
          backgroundColor: '#4FABC8',
          height: 40,
          color: '#fff',
          textAlign: "center",
          fontSize: 16,
          textAlignVertical: "center",
          marginTop: 20,
          borderRadius: 10
          }}>Registrasi</Text>
        </TouchableOpacity>
        <Text style={{
          color: 'grey',
          textAlign: "center",
          marginTop: 20,
          fontSize: 16}}>Sudah Mempunyai Akun? Masuk Disini</Text> 
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text
            style={{ 
            color: '#4FABC8',
            fontSize: 16,
            marginTop: 10,
            textAlign: "center"
            }}>Login</Text>
        </TouchableOpacity>
      </View>
  );
}

export default LoginScreen;