import UseCrudHooks from '@/hooks/useCrudHooks';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Shadow } from 'react-native-shadow-2';

const GlobalHeader = () => {
    const insets = useSafeAreaInsets();
    const { readData } = UseCrudHooks();

    useEffect(()=>{
        console.log(readData,'hi');
    },[readData])

    return (
        <Shadow
            style={{width:'100%'}}
        >   
            <View style={[styles.container,{paddingTop:insets.top}]}>
                <View style={styles.user_profile}>
                    <Image

                    />
                </View>
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
        backgroundColor:'pink',
        borderRadius:50
    }
})