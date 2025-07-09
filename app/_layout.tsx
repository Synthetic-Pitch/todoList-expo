import GlobalFooter from '@/components/GlobalFooter';
import GlobalHeader from '@/components/GlobalHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "../global.css";

export default function RootLayout() {
  const queryClient = new QueryClient();
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ProtestRevolution:require('../assets/fonts/ProtestRevolution-Regular.ttf'),
    ProtestRiot: require('../assets/fonts/ProtestRiot-Regular.ttf')
  });
  
  if (!fontsLoaded) {
    console.log('fonts not loaded');
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        
        <StatusBar style="dark"/>
        <View style={{flex:1,backgroundColor:"#E5E5E5"}}>
          <GlobalHeader></GlobalHeader>
          <Slot></Slot>
          <GlobalFooter/>
        </View>
        
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}