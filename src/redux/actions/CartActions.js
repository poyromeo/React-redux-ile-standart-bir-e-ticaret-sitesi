import * as actionsTypes from "./ActionsTypes";

export function addToCart(cartItem) {
    return {
        type: actionsTypes.ADD_TO_CART, payload: cartItem
    }
}

export function deleteFromCart(product) {
    return {
        type: actionsTypes.DELETE_FROM_CART, payload: product
    }
}