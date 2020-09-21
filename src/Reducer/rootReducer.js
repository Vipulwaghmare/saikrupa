import menu from '../Menu';
import { INCREASE, DECREASE, REMOVE, GET_TOTAL, CLEAR_CART } from './action';

const initState = {
    cart: menu,
    total: 0,
    amount: 0
}

export const rootReducer = (state= initState, action) => {
    // Increase
    if (action.type === INCREASE){
        let tempCart = state.cart.map(items =>{
            if(items.id === action.payload.id){
                return{
                    ...items,
                    amount: items.amount + 1
                }
            } else {
                return items;
            }
        })
        return {
            ...state,
            amount: state.amount + 1,
            cart: tempCart
        }
    }

    // Decrease
    if (action.type === DECREASE){
        if(action.payload.amount === 0){
            return{
                ...state
            }
        }
        let tempCart = state.cart.map(items =>{
            if(items.id === action.payload.id){
                return{
                    ...items,
                    amount: items.amount - 1
                }
            } else {
                return items;
            }
        })
        return {
            ...state,
            amount: state.amount - 1,
            cart: tempCart
        }
    }

    // Remove 
    if (action.type === REMOVE){
        let tempCart = state.cart.map(items =>{
            if(items.id === action.payload.id){
                return{
                    ...items,
                    amount: 0
                }
            } else {
                return items;
            }
        })
        return {
            ...state,
            cart: tempCart,
        }
    }

    // Clear cart
    if(action.type === CLEAR_CART){
        let tempCart = state.cart.map(items => {
            return {
                ...items,
                amount: 0
            }
        })
        return {
            ...state,
            cart: tempCart,
            amount: 0,
            total: 0
        }
    }

    // get total
    if(action.type === GET_TOTAL){
        let {total, amount} = state.cart.reduce((cartTotal, cartItem)=>{
          const { price, amount} = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },{
          total: 0,
          amount: 0
        })
        return {...state, total, amount}
      }

    return state;
}