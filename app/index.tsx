import { useQuery } from "@tanstack/react-query";
import Constants from 'expo-constants';
import { Image, StyleSheet, Text, View } from "react-native";

const Page = () => {
  const url = 'https://gzqijrdunlfaajngqnxh.supabase.co/functions/v1/todoPOSTID';
  const id ='profiles/ofoh8jstv7cccnobxf5m';
  const apiJWT = (Constants.expoConfig?.extra as { apiJWT?: string })?.apiJWT;


  const {data,isLoading} = useQuery({
    queryKey:['post'],
    queryFn:async()=>{
      const res = await fetch(url,{
        headers:{
          Authorization :`Bearer ${apiJWT}`,
          "Content-Type":"application/json",
        },
        method:'POST',
        body:JSON.stringify({public_ID:id})
      });
      const data = await res.json();
      return data
    }
  })
  
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {
          !isLoading && (
            <>
              <Text>{data.url}</Text>
              <Image style={styles.container_image} source={{uri:data.url}}/>
            </>
          )
        }
      </View>
    </View>
  )
}

export default Page;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  inner:{
    flex:1
  },
  container_image:{
    width:100,
    height:100
  }
})