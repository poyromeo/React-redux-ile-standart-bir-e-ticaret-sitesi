import * as actionsTypes from "../actions/ActionsTypes";
import İnitialState from "./İnitialState";

export default function productListReducer(state = İnitialState.products, action) {
    switch (action.type) {
        case actionsTypes.GET_PRODUCT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}