import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const GlobalFooter = () => {
    const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,{height:insets.bottom}]}>
        
    </View>
  )
}

export default GlobalFooter
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        width:'100%',
    }
})