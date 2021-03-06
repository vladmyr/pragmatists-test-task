import {Map, List} from "immutable";
import * as _ from "underscore";

import * as userActions from "../actions/user";

/**
 * Inner helper function - finds index of user in the list by user id
 * @param   {Immutable.Map} state
 * @param   {Number}        id
 * @returns {Number}
 */
const getIndexOfUserId = function(state, id = 0){
    return _.indexOf(_.pluck(state.get("list").toArray(), "id"), id);
};

/**
 * Sets the list of users
 * @param   {Immutable.Map}                 state
 * @param   {Array<Object>|Immutable.List}  list
 * @returns {Immutable.Map}
 */
const setList = (state = Map({}), list = List()) => {
    return state
        .set("list", List(list))
        .set("isProcessing", false);
};

/**
 * Create or update user in the list
 * @param state
 * @param item
 * @returns {Immutable.Map}
 */
const upsertUser = (state = Map({}), item) => {
    if(item.id == 0){
        return state.set("list", state.get("list").push(item))
    } else {
        let index = getIndexOfUserId(state, item.id);
        return index !== -1
            ? state.setIn(["list", index], item)
            : state;
    }
};

/**
 * Delete user from the list
 * @param   {Immutable.Map} state
 * @param   {Number}        id
 * @returns {Immutable.Map}
 */
const deleteUser = (state = Map({}), id = 0) => {
    let index = getIndexOfUserId(state, id);
    return index !== -1
        ? state.deleteIn(["list", index])
        : state;
};

/**
 * Manage popup window
 * @param   {Immutable.Map} state
 * @param   {Boolean}       isVisible
 * @param   {Object}        user
 * @returns {Immutable.Map}
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
 * @param   {Immutable.Map} state
 * @param   {Boolean}       isVisible
 * @param   {Number}        index
 * @returns {Immutable.Map}
 */
const uiPopover = (state = Map({}), isVisible = false, index = -1) => {
    return state.set("popover", Map({
        isVisible: isVisible,
        index: index
    }));
};

const apiProcessing = (state = Map({})) => {
    return state
            .set("isProcessing", true);
};

export default function userReducer(state = Map({}), action){
    switch(action.type){
        case userActions.API_PROCESSING:
            return uiPopupUser(apiProcessing(state));
        case userActions.LIST_USERS:
            return uiPopupUser(uiPopover(setList(state, action.list)));
        case userActions.UI_POPUP_OPEN:
            return uiPopupUser(uiPopover(state), true, action.user);
        case userActions.UI_POPUP_CLOSE:
            return uiPopupUser(state);
        case userActions.UI_POPOVER_OPEN:
            return uiPopover(state, true, action.index);
        case userActions.UI_POPOVER_CLOSE:
            return uiPopover(state);
        case userActions.API_GET_USERS_SUCCESS:
            return uiPopupUser(uiPopover(setList(state, action.list)));
    }

    return state;
};