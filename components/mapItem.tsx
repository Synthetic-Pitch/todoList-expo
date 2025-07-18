import useCrudHooks from '@/hooks/useCrudHooks';
import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

const MapItem = () => {
    const {createData,readData,resetData,todo} = useCrudHooks();

    return (
        <View  className="h-[93.3%] bg-[#E5E5E5] gap-2 relative">
            <ScrollView
                className='flex-1 relative'
            >
                {   
                    Array.isArray(todo) &&
                    todo.map((todos) =>
                        <View 
                            key={todos.key} 
                            className='bg-[#f7c5c5] w-[93%] h-[80px] m-auto mb-2 rounded-3xl'>
                            <Text>{todos.todo}</Text>
                        </View>
                    )
                }
            </ScrollView>
            
            <View className='absolute bottom-0 left-0 my-4 w-full items-end px-4 '>
                <View className='bg-[#97B9DF] w-[60px] h-[60px] items-center justify-center rounded-full'>
                    <Link
                        href={"/createTodo" as any}
                       className='inline-block'
                    >
                        <Text className='text-3xl'>+</Text>
                    </Link>
                </View>
            </View>
        </View>
    )
}

export default MapItem