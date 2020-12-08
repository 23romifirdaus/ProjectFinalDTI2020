// In App.js in a new project

import React, {useState,useEffect} from 'react';
import axios from 'axios';
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
  ToastAndroid
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardView from 'react-native-cardview'



const RegistrasiScreen = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasi_password, setKonfirmasiPassword] = useState("");
  const [email, setEmail] = useState("");
  const [konfirmasi_email, setKonfirmasiEmail] = useState("");
  const [nomorHandphone, setNomorHandphone] = useState('');

  useEffect(() => {

  });

  const submitRegistrasi = async () => {
    axios.post('https://emoneydti.basicteknologi.co.id/index.php/api/users/registrasi', {
      username: username,
      password: password,
      konfirmasi_password: konfirmasi_password,
      email: email,
      konfirmasi_email: konfirmasi_email,
      nomor_handphone: nomorHandphone
    })
    .then(function (response) {
      if(response.data.status == "true"){
        navigation.navigate('Login');
      }
      else {
        ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
      }
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
    }


  return (
    <View
      style={{
        paddingTop: 20,
        marginLeft: 28,
        marginRight: 28,
      }}
    >
      <TextInput
      placeholder="Username"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20,
        borderRadius: 7
      }}
      onChangeText={ text => setUsername(text)}
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
      onChangeText={ text => setPassword(text)}
      />
      <TextInput
      placeholder="Konfirmasi Password"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20,
        borderRadius: 7
      }}
      onChangeText={ text => setKonfirmasiPassword(text)}
      />
      <TextInput
      placeholder="Email"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20,
        borderRadius: 7
      }}
      onChangeText={ text => setEmail(text)}
      />
      <TextInput
      placeholder="Konfirmasi Email"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20,
        borderRadius: 7
      }}
      onChangeText={ text => setKonfirmasiEmail(text)}
      />
      <TextInput
      placeholder="No. Handphone"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20,
        borderRadius: 7
      }}
      onChangeText={ text => setNomorHandphone(text)}
      />

        <TouchableOpacity onPress={() => {submitRegistrasi()}}>      
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

export default RegistrasiScreen;