import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const imageSlice=createSlice({
    name:"imagesuser",
    initialState:[
        {
            id:uuidv4(),
            name:"meriam",
        
            email:'bensalah@gmail.com',
            photo:""
        }
    ],
    reducers:{
        setuserImage:(state,action)=>{
   return action.payload
        }
    }
})

export const {setuserImage} = imageSlice.actions
export default imageSlice.reducer