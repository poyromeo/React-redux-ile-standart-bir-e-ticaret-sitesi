import * as actionsTypes from "./ActionsTypes";

export function changeCategory(category) {
    return {
        type: actionsTypes.CHANGE_CATEGORY, payload: category
    }
}

export function getCategoriesSuccess(categories) {
    return {
        type: actionsTypes.GET_CATEGORY_SUCCESS, payload: categories
    }
}

//get category Api...
export function getCategories() {
    return function (dispatch) {
        let url = "http://localhost:3000/categories";
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getCategoriesSuccess(result)))

    }
}

