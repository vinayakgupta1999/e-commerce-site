// import { createSlice } from "@reduxjs/toolkit";
// const INITIAL_STATE = {
//     cart: [],
//   };

// export const cartSlice = createSlice({
//     name: 'CART',
//     INITIAL_STATE,
//     reducers: {
        // addToCart:(state,event)=>{    
        //    return {
        //     ...state,
        //     cart:event.payload
        //    }
        // },
        // increment:(state,event)=>{
        //     return {
        //         ...state,
        //         cart:state.cart.map((item)=> item.id===event.payload.id?{...item,qty:item.qty+1}:item)
        //       }

        // },
        // decrement:(state,event)=>{
        //     return {
        //         ...state,
        //         cart:state.cart.map((item)=> item.id===event.payload.id?{...item,qty:item.qty-1}:item)
        //       }

        // },
        // removeFromCart:(state,event)=>{
        //     return {
        //         ...state,
        //         cart: state.cart.filter((item) => item.id !== event.payload.id),
        //       };
        // }

//     }
// });
// export const { addToCart, increment, decrement,removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
  name: 'CART',
  initialState,
  reducers: {
        addToCart:(state,event)=>{    
            return {
             ...state,
             cart:event.payload
            }
         },
         increment:(state,event)=>{
            console.log(state,event,"dkdnkdn")
            return {
                ...state,
                cart:state.cart.map((item)=> item.id===event.payload.id?{...item,qty:item.qty+1}:item)
              }

        },
        decrement:(state,event)=>{
            return {
                ...state,
                cart:state.cart.map((item)=> item.id===event.payload.id?{...item,qty:item.qty-1}:item)
              }

        },
        removeFromCart:(state,event)=>{
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== event.payload.id),
              };
        }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,increment,decrement,removeFromCart } =  cartSlice.actions

export default cartSlice.reducer