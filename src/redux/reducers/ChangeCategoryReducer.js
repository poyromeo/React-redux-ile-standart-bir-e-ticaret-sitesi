import * as actionsTypes from "../actions/ActionsTypes";
import ─░nitialState from "./─░nitialState";

export default function changeCategoryReducer(state = ─░nitialState.currentCategory, action) {
    switch (action.type) {
        case actionsTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}