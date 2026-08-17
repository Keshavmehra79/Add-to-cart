import { configureStore } from "@reduxjs/toolkit";
 import myreducer from "./cartSlice"
const store=configureStore({
    reducer:{
        myreducer:myreducer
    }
})

export default store