import * as actionsTypes from "../actions/ActionsTypes";
import İnitialState from "./İnitialState";

export default function categoryListReducer(state = İnitialState.categories, action) {
    switch (action.type) {
        case actionsTypes.GET_CATEGORY_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}