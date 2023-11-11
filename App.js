
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Dangki from './src/view/Dangki';
import regetpassword from './src/view/regetpassword';
import rePassword from './src/view/rePassword';
// import File1 from './src/view/File1';

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="File1">
        <Drawer.Screen name="File1" component={File1} />
      </Drawer.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name="Đăng nhập" component={ManHinhDangNhap} />
        <Stack.Screen name="Đăng kí" component={Dangki} />
        <Stack.Screen name="Quên mật Khẩu" component={regetpassword} />
        <Stack.Screen name="Đổi Mật Khẩu" component={rePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ManHinhDangNhap({ navigation }) {
  const xuLyDangKi = () => {
    navigation.navigate('Đăng kí');
  };
  const xuLyMatKhau = () => {
    navigation.navigate('Quên mật Khẩu');
  };
  // const openDrawer = () => {
  //   navigation.openDrawer();
  // };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.imgBackgroud} source={require('./src/img/Học phí đại học Công nghiệp Hà Nội - HaUI(1).jpg')} />
      <View style={styles.dangNhap}>
        {/* <View>
        <TouchableOpacity onPress={openDrawer}>
          <Text>abc</Text>
        </TouchableOpacity>
        </View> */}
        <View style={styles.logoHaui}>
          <Image style={styles.imgLogo} source={require('./src/img/download.png')} />
          <Text style={styles.logoText}>Đại học Công nghiệp Hà Nội</Text>
        </View>

        <View style={styles.khoiNhap}>
          <View style={styles.iconlogin}>
          <Icon style={styles.Icon} name='user' /></View>
          <View>
          <TextInput
            style={styles.nhap}
            placeholder="Tên đăng nhập"
          />
        </View></View>
        <View style={styles.khoiNhap}>
          <Text>Mật khẩu</Text>
          <TextInput
            style={styles.nhap}
            placeholder=""
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.nut}>
          <Text style={styles.nutText}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nut} onPress={xuLyMatKhau}>
          <Text style={styles.nutText}>Quên Mật Khẩu</Text>
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
    position: 'relative',
  },
  dangNhap: {
    width: 290,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 60,
    alignItems: 'center',
    borderRadius: 10,
    fontSize:30,
    position: 'absolute',
    backgroundColor:'rgba(128, 128, 128, 0.4)',
  },
  logoHaui :{
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 30,
  },
  khoiNhap: {
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255, 0.6)',
    width: 270,
    borderRadius: 5,
    flexDirection: 'row',
  },
  iconlogin: {
    marginTop: 20,
  },
  Icon: {
    width: 120,
  },
  nhap: {
    paddingBottom: 10,
    paddingTop: 10,
    // borderWidth: 0,
    // borderColor: 'white',
  },
  nut: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 200,
    textAlign: 'center',
  },
  nutText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imgBackgroud: {
    width: 350,
    height: 700,
  },
  imgLogo: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  logoText: {
    paddingLeft: 15,
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
