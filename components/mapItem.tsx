import UseCrudHooks from '@/hooks/useCrudHooks';
import { Pressable, Text, View } from 'react-native';


const MapItem = () => {
    const {createData,readData,resetData} = UseCrudHooks()
  
    return (
        <View  className="h-[93.3%] bg-[#E5E5E5] py-8 gap-2 relative">
            <Pressable 
                onPress={()=>createData({todo:"eat egg",color:'green'})} 
                className='p-4 bg-[skyblue] '
            >   
                <Text>create data</Text>
            </Pressable>

            <Pressable onPress={readData} className='p-4 bg-[skyblue] '><Text>get data</Text></Pressable>
             <Pressable onPress={resetData} className='p-4 bg-[skyblue] '><Text>reset data</Text></Pressable>
            <View className='absolute bottom-0 left-0 p-4 m-4 w-full bg-[pink] items-end'>
                <Text className='bg-[#97B9DF] w-[60px] '>X</Text>
            </View>

            
            
        </View>
    )
}

export default MapItem