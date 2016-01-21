import {Map, List} from "immutable";
import * as userActions from "../actions/user";

/**
 * Sets the list of users
 * @param state
 * @param   {Array<Object>|Immutable.List}  list
 * @returns {Immutable.Map}
 */
const setList = (state, list = List()) => {
    return state.set("list", List(list));
};

/**
 * Add an item to the list
 * @param state
 * @param item
 */
const addUser = (state, item) => {
    return state
};

/**
 * Manage popup window
 * @param {Immutable.Map}   state
 * @param {Boolean}         isVisible
 * @param {Object}          user
 * @returns {Immutable.Map}
 */
const uiPopupUser = (state, isVisible = false, user = {}) => {
    if(isVisible){
        return state
            .setIn(["popup", "isVisible"], isVisible)
            .setIn(["popup", "user"], user);
    } else {
        return state
            .remove("popup");
    }
};

export default function userReducer(state = Map(), action){
    switch(action.type){
        case userActions.LIST_USERS:
            return setList(state, action.list);
        case userActions.CREATE_USER:
            return addUser(state, action.user);
        case userActions.UI_POPUP_OPEN:
            return uiPopupUser(state, true, action.user);
        case userActions.UI_POPUP_CLOSE:
            return uiPopupUser(state, false);
    }

    return state;
};