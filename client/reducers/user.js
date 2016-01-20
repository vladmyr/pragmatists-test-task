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
    console.warn("[reducer]", state, action);

    switch(action.type){
        case userActions.LIST_USERS:
            return setList(state, action.list);
    }

    return state;
};