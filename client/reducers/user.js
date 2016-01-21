import {Map, List} from "immutable";
import * as userActions from "../actions/user";

/**
 * Sets the list of users
 * @param state
 * @param   {Array<Object>|Immutable.List}  list
 * @returns {Object}
 */
const setList = (state = Map({}), list = List()) => {
    return state
        .set("list", List(list));
};

/**
 * Add an item to the list
 * @param state
 * @param item
 */
const addUser = (state = Map({}), item) => {
    return state.set("list", state.get("list").push(item))
};

const deleteUser = (state = Map({}), index) => {
    return state;
};

/**
 * Manage popup window
 * @param {Object}   state
 * @param {Boolean}         isVisible
 * @param {Object}          user
 * @returns {Object}
 */
const uiPopupUser = (state = Map({}), isVisible = false, user = {}) => {
    return state.set("popup", Map({
        isVisible: isVisible,
        user: (isVisible
            ? user
            : {})
    }));
};

export default function userReducer(state = Map({}), action){
    switch(action.type){
        case userActions.LIST_USERS:
            return uiPopupUser(setList(state, action.list));
        case userActions.CREATE_USER:
            return addUser(state, action.user);
        case userActions.UI_POPUP_OPEN:
            return uiPopupUser(state, true, action.user);
        case userActions.UI_POPUP_CLOSE:
            return uiPopupUser(state, false);
    }

    return state;
};