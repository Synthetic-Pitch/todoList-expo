import Header from '@/components/headers';
import { useState } from 'react';
import { Dimensions, Pressable, Text, TextInput, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
const screenWidth = Dimensions.get("window").width;



const Page = () => {
  const [selected,setSelected] = useState<number | null>(null)

  const Colors = [
    '#DFCCA7','#F2BBEE','#F2BBBC','#BFF2BB','#F2D6BB'
  ];


  return (
   <View className="flex-1 bg-[#E5E5E5] relative">
      <Shadow
        startColor="rgb(189, 189, 189)"
        endColor="rgb(189, 189, 189,.1)"
        safeRender
        distance={8}
        style={{position:"relative",zIndex:20,marginBottom:10,borderBottomRightRadius:53,width:screenWidth}}
      >
        <Header/>
      </Shadow>
      <View className="flex-1 relative"> 
        
        <View className='relative w-full items-center h-[calc(100%-44.8px) mt-4'>
          <Shadow
            offset={[0,3]}
            distance={6}
            >
            <TextInput
              multiline
              placeholder='todo text'
              style={{
                height:200,
                width:screenWidth-40,
                paddingVertical:19,
                paddingHorizontal:19,
                borderRadius:23,
                textAlignVertical:'top',
                backgroundColor:"#E5E5E5",
                alignSelf:'center',
                fontSize:18,
              }}
            />
          </Shadow>
        </View>
    

        <View  className='items-end px-6 justify-center mt-6'>
          <Pressable className='bg-[#97B9DF] py-2 px-8 rounded-2xl'>
            <Text className='text-xl font-poppins text-white'>add</Text>
          </Pressable>
        </View>

        <View className='px-4'>
          <Text className='font-poppins text-[gray]'>color</Text>
          <View className='flex-row gap-2'>
              {
                Colors.map((color,index)=>(
                  <Pressable 
                    key={index} 
                    style={{height:28,width:28,backgroundColor:color,borderRadius:50,borderColor:'gray',borderWidth: selected === index ? 1.5 : 0 }}
                    onPress={()=>setSelected(index)}
                  /> 
                ))
              }
          </View>
        </View>
        <View className='absolute bottom-0 bg-[red] h-20 w-20'>

        </View>
        <View
          className='h-[44.8px] w-full bg-black absolute bottom-0'
        />
        
      </View>
    </View>
  )
}

export default Page