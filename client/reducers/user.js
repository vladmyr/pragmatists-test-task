import {Map, List} from "immutable";
import * as userActions from "../actions/user";

/**
 * Sets the list of users
 * @param state
 * @param   {Array<Object>|Immutable.List}  list
 * @returns {Immutable.Map}
 */
const setList = (state = Map({}), list = List()) => {
    return state
        .set("list", List(list));
};

/**
 * Add user to the list
 * @param state
 * @param item
 * @returns {Immutable.Map}
 */
const addUser = (state = Map({}), item) => {
    return state.set("list", state.get("list").push(item))
};

/**
 * Update user information
 * @param state
 * @param index
 * @param user
 * @returns {Immutable.Map}
 */
const updateUser = (state = Map({}), index, user) => {
    return state.setIn(["list", index], user);
};

/**
 * Delete user from the list
 * @param state
 * @param index
 * @returns {Immutable.Map}
 */
const deleteUser = (state = Map({}), index) => {
    return state;
};

/**
 * Manage popup window
 * @param {Object}   state
 * @param {Boolean}  isVisible
 * @param {Object}   user
 * @returns {Immutable.Map}
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

/**
 * Manage table item action menu visibility
 * @param state
 * @param isVisible
 * @param index
 * @returns {Immutable.Map}
 */
const uiPopover = (state = Map({}), isVisible = false, index = -1) => {
    let newState = state.set("popover", Map({
        isVisible: isVisible,
        index: index
    }));

    console.log(newState.get("popover").toObject());

    return newState;
};

export default function userReducer(state = Map({}), action){
    switch(action.type){
        case userActions.LIST_USERS:
            return uiPopupUser(setList(state, action.list));
        case userActions.CREATE_USER:
            return addUser(state, action.user);
        case userActions.UPDATE_USER:
            return updateUser(state, action.index, action.user);
        case userActions.DELETE_USER:
            return deleteUser(state, action.index);
        case userActions.UI_POPUP_OPEN:
            return uiPopupUser(state, true, action.user);
        case userActions.UI_POPUP_CLOSE:
            return uiPopupUser(state, false);
        case userActions.UI_POPOVER_OPEN:
            return uiPopover(state, true, action.index);
        case userActions.UI_POPOVER_CLOSE:
            return uiPopover(state, false);

    }

    return state;
};