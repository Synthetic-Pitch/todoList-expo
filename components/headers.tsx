import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

const Header = () => {
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
        <View className='h-[200px] bg-[#97B9DF] px-8 rounded-br-[50px] flex-row items-center gap-6'>
            { selectedImage ? (
                    <View className='mt-4 relative justify-center h-[100px]'>
                        <Image 
                            source={{ uri: selectedImage }}
                            className='w-[100px] h-[100px] rounded-lg'
                            resizeMode="cover"
                            style={{
                                borderRadius:100,zIndex:1
                            }}
                        />
                        <Pressable onPress={pickImage} className='absolute bottom-0 bg-[#97B9DF] z-10 rounded-md pr-1'>
                            <Image
                                source={require('../assets/images/camera.png')}
                                className='z-10 h-7 w-7'
                            />
                        </Pressable>
                    </View>
                ):(
                    <Pressable 
                        onPress={pickImage} 
                        className='h-[100px] w-[100px] bg-[#d0d0d0] rounded-full items-center justify-center'
                    >
                        <Text>import</Text>
                    </Pressable>
                )
            }
            
            <View className='mt-6'>
                <Text className='text-2xl font-protestriot'>Marked</Text>
                <Text className='text-xl font-poppins text-white'>{100}pts</Text>
            </View>

        </View>
    )
}

export default Header