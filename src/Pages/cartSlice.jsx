import { createSlice } from "@reduxjs/toolkit";
const savedCart = localStorage.getItem("cart");
 const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:savedCart ? JSON.parse(savedCart) : [],
    },
    reducers:{
        addtoCart:(state,actions)=>{
                for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].id==actions.payload.id){
                   alert("Product Already Added")
                   return
                }
            }
            state.cart.push(actions.payload)

      localStorage.setItem("cart",
        JSON.stringify(state.cart)
      );

        },
        removeItem:(state,actions)=>{
            state.cart=state.cart.filter((item)=>item.id!=actions.payload.id)
             localStorage.setItem("cart",
        JSON.stringify(state.cart));
        },
        increItem:(state,actions)=>{
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].id==actions.payload.id){
                    state.cart[i].qnty++;
                }
            }

            localStorage.setItem(
        "cart",
        JSON.stringify(state.cart)
      );
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
             localStorage.setItem(
        "cart",
        JSON.stringify(state.cart)
      );

        }

    }


 })

 export const {addtoCart,removeItem,increItem,decreItem}=cartSlice.actions;
 export default cartSlice.reducer