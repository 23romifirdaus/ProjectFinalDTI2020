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
  TouchableOpacity,
  TouchableHighlight
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

const AboutScreen = ({ navigation }) => {
  return (
      <View>
          <Text style={{
            marginVertical: 20,
            marginHorizontal: 50,
            borderColor: '#A9A9A9', 
            borderWidth: 2,
            borderBottomWidth: 2,
            padding: 10,
            borderRadius: 7,
            textAlign: "center"
            }}>Fresh Mart merupakan aplikasi pembelian ikan dan beras 
se-Indonesia sejak 2021. Untuk info lebih lanjut hubungi 
351281.</Text>
        <Text style={{textAlign: "center"}}>Temukan Freshmart di</Text>
        <View style={[{ flexDirection:'row', marginVertical: 20, marginHorizontal:30,backgroundColor: "#4FABC8",borderRadius: 20 }]}>
        <View style={{
            marginVertical: 10,
            marginHorizontal: 10,
            marginLeft: 16,
            borderWidth: 2,
            borderBottomWidth: 2,
            borderRadius: 10,}}>
            <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <Image style={{}} source={require('../img/icon_facebook.png')}/>     
            </TouchableHighlight>
            </View>
            <View style={{
            marginVertical: 10,
            marginHorizontal: 10,
            borderWidth: 2,
            borderBottomWidth: 2,
            borderRadius: 10,}}>
            <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <Image style={{}} source={require('../img/icon_twitter.png')}/>     
            </TouchableHighlight>
            </View>
            <View style={{
            marginVertical: 10,
            marginHorizontal: 10,
            borderWidth: 2,
            borderBottomWidth: 2,
            borderRadius: 10,}}>
            <TouchableHighlight onPress={() => navigation.navigate('Home')}>
            <Image style={{}} source={require('../img/icon_instagram.png')}/>     
            </TouchableHighlight>
            </View>
            <View style={{
            marginVertical: 10,
            marginHorizontal: 10,
            borderWidth: 2,
            borderBottomWidth: 2,
            borderRadius: 10,}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={{}} source={require('../img/icon_google.png')}/>     
            </TouchableOpacity>
            </View>
            </View>
        <Text style={{textAlign: "center"}}>Pertanyaan Seputar Pemesanan Melalui Aplikasi Ini</Text>
        <View style={[{ marginVertical: 10, marginHorizontal:30,backgroundColor: "#4FABC8",borderRadius: 10 }]}>
        <View>
        <TouchableOpacity>
            <Text style={{ marginVertical: 10, marginHorizontal: 20, color: 'white', backgroundColor: '#4FABC8'}}>Bagaimana cara memesan melalui aplikasi ini?</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={[{ marginBottom: 10,marginHorizontal:30,backgroundColor: "#4FABC8",borderRadius: 10 }]}>
        <View>
        <TouchableOpacity>
            <Text style={{ marginVertical: 10, marginHorizontal: 20, color: 'white', backgroundColor: '#4FABC8'}}>Apakah bisa memesan di luar aplikasi? </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={[{ marginBottom:10, marginHorizontal:30,backgroundColor: "#4FABC8",borderRadius: 10 }]}>
        <View>
        <TouchableOpacity>
            <Text style={{ marginVertical: 10, marginHorizontal: 20, color: 'white', backgroundColor: '#4FABC8'}}>Bagaimana melaporkan keluhan pemesanan? </Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={[{ marginBottom:10, marginHorizontal:30,backgroundColor: "#4FABC8",borderRadius: 10 }]}>
        <View>
        <TouchableOpacity>
            <Text style={{ marginVertical: 10, marginHorizontal: 20, color: 'white', backgroundColor: '#4FABC8'}}>Apa saja metode pembarayan untuk pemesanan? </Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
  );
}

export default AboutScreen;