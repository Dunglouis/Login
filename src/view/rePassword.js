
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';

export default function rePassword() {
    
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            
            <View style={styles.screenRePassword}>
                <View style={styles.inputRePassword}>
                    <Text>Mã Code</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nhập Mã Code'
                    />
                </View>
                <View style={styles.input}>
                    <Text>Mật Khẩu Mới</Text>
                    <TextInput 
                        style={styles.inputRePassword}
                        placeholder="Nhập Mật Khẩu Mới"
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputRePassword}>
                    <Text>Nhập Lại Mật Khẩu Mới</Text>
                    <TextInput 
                        style={styles.inputRePassword}
                        placeholder='Nhập Lại Mật Khẩu Mới'
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Xác Nhận Và Đăng Nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
    },
    screenRePassword: {
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 10,
        fontSize: 30,
    },
});