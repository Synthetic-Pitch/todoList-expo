import 'dotenv/config';

export default{
    expo:{
        name: "todoList-expo",
        slug: "todoList-expo",
        version: "1.0.0",
        extra: {
            apiJWT: process.env.SUPABASE_JWT_AUTHORIZATION,
        },
    }
}