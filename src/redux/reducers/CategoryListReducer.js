import * as actionsTypes from "../actions/ActionsTypes";
import ─░nitialState from "./─░nitialState";

export default function categoryListReducer(state = ─░nitialState.categories, action) {
    switch (action.type) {
        case actionsTypes.GET_CATEGORY_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}