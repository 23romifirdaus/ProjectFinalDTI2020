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

const UbahProfileScreen = ({ navigation }) => {
  return (
    <View
        style={{
          paddingTop: 20,
          marginRight: 28,
          marginLeft: 28
        }}
      >
        <Text style={{marginBottom: 9, marginLeft: 3}}>Nama Lengkap</Text>
        <TextInput
        placeholder="Nama Lengkap"
        style={{
          height: 40,
          borderColor: '#A9A9A9', 
          borderWidth: 1,
          borderBottomWidth: 1,
          marginBottom: 10,
          borderRadius: 7
        }}
        />
        <Text style={{marginBottom: 9, marginLeft: 3}}>No. Handphone</Text>
        <TextInput
        placeholder="No Handphone"
        style={{
          height: 40, 
          borderColor: '#A9A9A9', 
          borderWidth: 1,
          borderBottomWidth: 1,
          marginBottom: 11,
          borderRadius: 7
        }}
        />
        <Text style={{marginBottom: 19, marginLeft: 3}}>Email</Text>
        <TextInput
        placeholder="Email"
        style={{
         height: 40, 
          borderColor: '#A9A9A9', 
          borderWidth: 1,
          borderBottomWidth: 1,
          marginBottom: 20,
          borderRadius: 7,
          marginTop: -9
        }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>      
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
          }}>Konfirmasi</Text>
        </TouchableOpacity>
      </View>
  );
}

export default UbahProfileScreen;