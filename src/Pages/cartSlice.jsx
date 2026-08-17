import { createSlice } from "@reduxjs/toolkit";
 const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,actions)=>{
            state.cart.push(actions.payload)
        },
        removeItem:(state,actions)=>{
            state.cart=state.cart.filter((item)=>item.id!=actions.payload.id)
        },
        increItem:(state,actions)=>{
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].id==actions.payload.id){
                    state.cart[i].qnty++;
                }
            }
        },
        decreItem:(state,actions)=>{
            for(let i=0;i<state.cart.length;i++){
                if (state.cart[i].id==actions.payload.id){
                       if(state.cart[i].qnty==1){
                           return
                       }
                        state.cart[i].qnty--;
                }
            }
        }
    }

 })

 export const {addtoCart,removeItem,increItem,decreItem}=cartSlice.actions;
 export default cartSlice.reducer