import * as actionsTypes from "../actions/ActionsTypes";
import İnitialState from "./İnitialState";

export default function changeCategoryReducer(state = İnitialState.currentCategory, action) {
    switch (action.type) {
        case actionsTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}