import * as actionsTypes from "../actions/ActionsTypes";
import ─░nitialState from "./─░nitialState";

export default function productListReducer(state = ─░nitialState.products, action) {
    switch (action.type) {
        case actionsTypes.GET_PRODUCT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}