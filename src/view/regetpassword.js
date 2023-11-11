
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function regetpassword() {
  const navigation = useNavigation();
  const xuLyMK = () => {
      navigation.navigate('Đổi Mật Khẩu')
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.manHinhLogin}>
        <Text>REGET YOUR PASSWORD</Text>
        <View style={styles.inputContainer}>
          <Text>Mã sinh viên</Text>
          <TextInput
              style={styles.input}
              placeholder="Mã sinh viên"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Số điện thoại </Text>
          <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={xuLyMK}>
           <Text style={styles.buttontext}>Lấy mã code</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manHinhLogin: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 30,
  },
  inputContainer:{
    paddingBottom:10,
    paddingTop: 5,
  },
  input:{
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
  },
});
