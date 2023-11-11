
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';

export default function Dangki() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.manHinhLogin}>
        <Text>CREAT YOUR ACCOUNT</Text>
        <View style={styles.inputContainer}>
          <Text>Username</Text>
          <TextInput
              style={styles.input}
              placeholder="Tên đăng nhập"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Mật khẩu</Text>
          <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
           <Text>Xác Nhận Mật Khẩu</Text>
           <TextInput
              style={styles.input}
              placeholder="Xác nhận mật khẩu"
              secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Mã sinh viên</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhâp mã sinh viên"
          />
        </View>
        <TouchableOpacity style={styles.button}>
           <Text style={styles.buttontext}>Đăng kí</Text>
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
