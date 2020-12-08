// In App.js in a new project

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
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardView from 'react-native-cardview'

const SettingsScreen = ({ navigation }) => {
  return (
      <View>      
        <TouchableOpacity onPress={() => navigation.navigate('UbahProfile')}>      
          <Text 
          style={{
          backgroundColor: '#4FABC8',
          height: 40,
          color: '#fff',
          textAlign: "center",
          fontSize: 16,
          textAlignVertical: "center",
          marginTop: 20,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 18,
          marginRight: 18
          }}>Ubah Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Keluhan')}>      
          <Text 
          style={{
          backgroundColor: '#4FABC8',
          height: 40,
          color: '#fff',
          textAlign: "center",
          fontSize: 16,
          textAlignVertical: "center",
          marginTop: 20,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 18,
          marginRight: 18
          }}>Lapor Keluhan</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('GantiPassword')}>      
          <Text 
          style={{
          backgroundColor: '#4FABC8',
          height: 40,
          color: '#fff',
          textAlign: "center",
          fontSize: 16,
          textAlignVertical: "center",
          marginTop: 20,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 18,
          marginRight: 18
          }}>Ganti Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')}>      
          <Text 
          style={{
          backgroundColor: '#4FABC8',
          height: 40,
          color: '#fff',
          textAlign: "center",
          fontSize: 16,
          textAlignVertical: "center",
          marginTop: 20,
          borderRadius: 10,
          marginTop: 10,
          marginLeft: 18,
          marginRight: 18
          }}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
            style={{ 
            color: '#4FABC8',
            fontSize: 16,
            marginTop: 20,
            textAlign: "center"
            }}>Logout</Text>
        </TouchableOpacity>
      </View>
  );
}

export default SettingsScreen;