import * as actionsTypes from "../actions/ActionsTypes";
import İnitialState from "./İnitialState";

export default function cartReducer(state = İnitialState.cart, action) {

    switch (action.type) {
        case actionsTypes.ADD_TO_CART:
            //Eğer sepette aynı eleman varsa sadace adetini arttır...
            var addedItem = state.find(c => c.product.productID === action.payload.product.productID);
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.productID === action.payload.product.productID) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
                    }
                    return cartItem;
                })
                return newState;
            } else {
                //...state bir kopyasını al ve payload: cart 'a ekle...
                return [...state, { ...action.payload }]
            }


            
        case actionsTypes.DELETE_FROM_CART:
            const newCart2 = state.filter(cartItem => cartItem.product.productID !== action.payload.productID)
            return newCart2;

        default:
            return state;
    }
}

