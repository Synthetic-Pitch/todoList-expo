import Header from "@/components/headers";
import { Dimensions, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import MapItem from "../components/mapItem";
const screenWidth = Dimensions.get("window").width;

const Page = () => {
  return (
    <View className="flex-1 bg-[#E5E5E5]">
      <Shadow
        startColor="rgb(189, 189, 189)"
        endColor="rgb(189, 189, 189,.1)"
        safeRender
        distance={8}
        style={{position:"relative",zIndex:20,marginBottom:10,borderBottomRightRadius:53,width:screenWidth}}
      >
        <Header/>
      </Shadow>
       
      <View className="flex-1 bg-[#000000] relative"> 
        <MapItem/>
      </View>
    </View>
  )
}

export default Page;