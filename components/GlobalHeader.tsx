import { useQuery } from '@tanstack/react-query';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';
const GlobalHeader = () => {
    const insets = useSafeAreaInsets();
   
    const {data,error,isLoading,refetch} = useQuery({
        queryKey:['get'],
        queryFn:async ()=>{
            const res = await fetch('https://gzqijrdunlfaajngqnxh.supabase.co/functions/v1/hello-world');
            const data = await res.json();
            return data
        }
    });
    
    return (
        <Shadow
            style={{width:'100%'}}
        >   
            <View style={[styles.container,{paddingTop:insets.top}]}>
                <View style={styles.user_profile}></View>
            </View>
        </Shadow>
    )
}

export default GlobalHeader

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:160,
        backgroundColor:'#97B9DF',
        borderBottomRightRadius:43,
        paddingHorizontal:40,
        display:'flex',
        justifyContent:'center'
    },
    user_profile:{
        height:90,
        width:90,
        backgroundColor:'#D9D9D9',
        borderRadius:50
    }
})