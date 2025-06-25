import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from 'react-native';
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ProtestRevolution:require('../assets/fonts/ProtestRevolution-Regular.ttf'),
    ProtestRiot: require('../assets/fonts/ProtestRiot-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>; // You can also use a spinner
  }

  return (
    <React.Fragment>
      <StatusBar style="dark"/>
      <Stack 
       screenOptions={{
        headerShown:false
       }}
      />
    </React.Fragment>
  )
}
