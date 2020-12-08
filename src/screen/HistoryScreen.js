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

const styles = StyleSheet.create({
  container: {
  marginVertical: 10
  },
});

const HistoryScreen = ({ navigation }) => {
  return (
      <View>
          <ScrollView style={styles.container}>
          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>
          
          <View style={{flex:1,margin:5,backgroundColor:'white', borderRadius: 5, justifyContent: "space-between", marginLeft: 20, marginRight: 20}}>
          <Text style={{fontSize:20,marginLeft:50, marginTop:20,}}>Rp100.000</Text>
          <Text style={{fontSize:16,marginLeft:50, marginBottom:20}}>Transfer Ke 082219441601</Text>
          </View>

        </ScrollView> 
      </View>
  );
}

export default HistoryScreen;