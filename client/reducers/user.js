import {Map, List} from "immutable";
import * as userActions from "../actions/user";

/**
 * Sets the list of users
 * @param state
 * @param list
 * @returns {Immutable.Map}
 */
const setList = (state, list) => {
    return state.set("list", list);
};

export default (state = Map(), action) => {
    let newState = state;

    switch(action.type){
        case userActions.LIST_USERS:
            newState = setList(state, action.list);
    }

    console.warn("[reducer]", action.type, newState);

    return newState;
};