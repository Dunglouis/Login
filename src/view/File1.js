// File1.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function File1() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View>
      <TouchableOpacity onPress={openDrawer}>
        <Text>☰</Text>
      </TouchableOpacity>
      <Text>File 1</Text>
    </View>
  );
}
