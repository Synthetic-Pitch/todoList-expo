import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

type TodoItem = {
    key: string;
    todo: string;
    color: string;
};

export default function UseCrudHooks(){
    const [todo, setTodos] = useState<TodoItem[]>([]);

    const createData = async (
            {todo,color}
            :
            {todo:string,color:string}
        ) => {
        const randKey = (Math.floor(Math.random() * 900000)+100000).toString();
        const date = new Date().toLocaleString();
        try{
            await AsyncStorage.setItem(randKey, JSON.stringify({todo,color,date}));
        }catch(e){
            console.error(e)
            console.log('Error occured while creating data in AsyncStorage')
        }
    }
    
    const readData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const rawTodos = await AsyncStorage.multiGet(keys);
            const todos = rawTodos
            .map(([key, value]) => {
                if (!value) return null;
                const parsed = JSON.parse(value);
                return {
                    key,
                    ...parsed,
                };
            })
            .filter(Boolean);
            console.log(todos);
            
            setTodos(todos); // <-- update state here
            return todos;
        } catch (e) {
            console.error('Error reading AsyncStorage data:', e);
        }
    };

    const resetData = async () => {
        try{
            await AsyncStorage.clear();
        }catch(e){
            console.error(e);
            console.log("Error occured while performing reset All data")
        }
    }

    return{
        createData,readData,resetData,todo
    }
}