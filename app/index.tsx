import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    // Request permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Set selected image
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View className='h-[200px] bg-[#aaaae9] justify-center items-center'>
      <TouchableOpacity 
        onPress={pickImage} 
        className='h-20 w-20 bg-[#d0d0d0] justify-center items-center rounded-lg'
      >
        <Text>Pick Image</Text>
      </TouchableOpacity>
      
      {selectedImage && (
        <View className='mt-4'>
          <Image 
            source={{ uri: selectedImage }}
            className='w-24 h-24 rounded-lg'
            resizeMode="cover"
          />
        </View>
      )}
    </View>
  )
}

export default Page;