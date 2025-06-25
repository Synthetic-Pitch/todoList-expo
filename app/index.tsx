import { View } from "react-native";
import Header from "../components/headers";
import MapItem from "../components/mapItem";

const Page = () => {
  return (
    <View className="flex-1 bg-[#E5E5E5]">
      <Header/>
      <View className="flex-1 bg-[#000000] relative"> 
        <MapItem/>
      </View>
    </View>
  )
}

export default Page;