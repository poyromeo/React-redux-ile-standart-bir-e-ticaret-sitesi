import { combineReducers } from "redux";
import changeCategoryReducer from "./ChangeCategoryReducer";
import categoryListReducer from "./CategoryListReducer";
import productListReducer from "./ProductListReducer";
import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer,

})

export default rootReducer;

