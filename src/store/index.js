import { configureStore } from "@reduxjs/toolkit";
import imageSlice from './imageSlice'
export default configureStore({
    reducer:{
        imagesuser:imageSlice
    }
})