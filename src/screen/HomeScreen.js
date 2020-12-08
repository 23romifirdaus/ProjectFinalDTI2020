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
  TouchableOpacity,
  SafeAreaViewBase
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CardView from 'react-native-cardview'

const HomeScreen = ({ navigation }) => {

  return (
    <View>
    <TextInput
        placeholder="Search.."
        style={{
          height: 40, 
          borderColor: '#4FABC8', 
          borderWidth: 2,
          borderBottomWidth: 2,
          marginRight: 30,
          marginLeft: 30,
          marginTop: 20,
          borderRadius: 10
        }}
        />
 
          <CardView 
          cornerRadius={10}
          style={{marginHorizontal: 30,marginTop: 30}}>
          <Text style={{fontSize:16, margin: 10}}>Rp100.000{"\n"}
          Transfer Ke 082219441601
          </Text>
          </CardView>

          <CardView 
          cornerRadius={10}
          style={{marginHorizontal: 30,marginTop: 10}}>
          <Text style={{fontSize:16, margin: 10}}>Rp100.000{"\n"}
          Transfer Ke 082219441601</Text>
          </CardView>
    </View>
  );
}

export default HomeScreen;