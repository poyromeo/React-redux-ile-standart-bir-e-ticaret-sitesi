import * as actionsTypes from "./ActionsTypes";

export function getProductSuccess(products) {
    return {
        type: actionsTypes.GET_PRODUCT_SUCCESS, payload: products
    }
}

//get product Api...
export function getProducts(categoryID) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";

        //onClick category
        if(categoryID){
            url = url + "?categoryID=" + categoryID;
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductSuccess(result)))
    }
}