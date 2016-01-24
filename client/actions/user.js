import {Map, List} from "immutable";
import * as Bluebird from "bluebird";

import User from "../models/user"
import UsersCollection from "../collections/users";

export const LIST_USERS = "LIST_USERS";
export const UI_POPOVER_OPEN = "UI_POPOVER_OPEN";
export const UI_POPOVER_CLOSE = "UI_POPOVER_CLOSE";
export const UI_POPUP_OPEN = "UI_POPUP_OPEN";
export const UI_POPUP_CLOSE = "UI_POPUP_CLOSE";
export const API_PROCESSING = "API_PROCESSING";
export const API_GET_USERS = "API_GET_USERS";
export const API_GET_USERS_FAILURE = "API_GET_USERS_FAILURE";
export const API_GET_USERS_SUCCESS = "API_GET_USERS_SUCCESS";
export const API_UPSERT_USER_FAILURE = "UPSERT_USER_FAILURE";
export const API_DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

/**
 * Action creator. Processing a request to API server
 * @returns {Object}
 */
export function apiProcessing(){
    return {
        type: API_PROCESSING
    }
}

/**
 * Action creator. Set list of users
 * @param   {Array.<Object>}    list
 * @returns {Object}
 */
export function setUserList(list = List([])){
    return {
        type: LIST_USERS,
        list: list
    }
}

/**
 * Action creator. Render popup window
 */
export function uiPopupCreateUser(){
    return {
        type: UI_POPUP_OPEN
    }
}

/**
 * Action creator. Render popup window
 * @param   {Number}    index
 * @param   {Object}    user
 * @returns {Object}
 */
export function uiPopupUpdateUser(index = -1, user = {}){
    return {
        type: UI_POPUP_OPEN,
        index: index,
        user: user
    }
}

/**
 * Action creator. Close popup window
 * @returns {Object}
 */
export function uiPopupClose(){
    return {
        type: UI_POPUP_CLOSE
    }
}

/**
 * Action creator. Open popover window
 * @param   {Number} index
 * @returns {Object}
 */
export function uiPopoverOpen(index = -1){
    return {
        type: UI_POPOVER_OPEN,
        index: index
    }
}

/**
 * Action creator. Close popover window
 * @returns {Object}
 */
export function uiPopoverClose(){
    return {
        type: UI_POPOVER_CLOSE
    }
}

/**
 * Action creator. Request the list of users
 * @returns {Object}
 */
export function apiGetUsers(){
    return {
        type: API_GET_USERS
    }
}

/**
 * Action creator. Get user list succeeded
 * @param   {Object}    list
 * @returns {Object}
 */
export function apiGetUsersSuccess(list){
    return {
        type: API_GET_USERS_SUCCESS,
        list: list
    }
}

/**
 * Action creator. Get user list failed
 * @param   {jQuery.jqXHR}  resp
 * @returns {Object}
 */
export function apiGetUsersFailure(resp){
    return {
        type: API_GET_USERS_FAILURE,
        resp: resp
    }
}

/**
 * Action creator. Create/update new user failed
 * @param   {jQuery.jqXHR}  user
 * @returns {Object}
 */
export function apiUpsertUserFailure(user){
    return {
        type: API_UPSERT_USER_FAILURE,
        user: user
    }
}

/**
 * Action creator. Delete user failed
 * @param   {jQuery.jqXHR}  resp
 * @returns {Object}
 */
export function apiDeleteUserFailure(resp){
    return {
        type: API_DELETE_USER_FAILURE,
        resp: resp
    }
}

/**
 * Thunk action creator. Request the list of users
 * @returns {Object}
 * @returns {Function}
 */
export function apiGetUsersThunk(){
    return (dispatch) => {
        let usersCollection = new UsersCollection();

        dispatch(apiProcessing());

        return new Bluebird.Promise((resolve, reject) => {
            return usersCollection.fetch({
                success: resolve,
                error: reject
            });
        }).then((resp) => {
            return dispatch(apiGetUsersSuccess(resp.toJSON()));
        }).catch(() => {
            return dispatch(apiGetUsersFailure(resp));
        });
    }
}

/**
 * Thunk action creator. Create / update user
 * @param   {Object}    user
 * @returns {Function}
 */
export function apiUpsertUserThunk(user){
    return (dispatch) => {
        let userModel = new User(user);

        dispatch(apiProcessing());

        return new Bluebird.Promise((resolve, reject) => {
            return userModel.save(undefined, {
                success: resolve,
                error: reject
            })
        }).then(() => {
            return dispatch(apiGetUsersThunk());
        }).catch((resp) => {
            return dispatch(apiUpsertUserFailure(resp))
        })
    }
}

/**
 * Thunk action creator. Delete user
 * @param   {Number}    id
 * @returns {Function}
 */
export function apiDeleteUserThunk(id){
    return (dispatch) => {
        let userModel = new User({
            id: id
        });

        dispatch(apiProcessing());

        return new Bluebird.Promise((resolve, reject) => {
            return userModel.destroy({
                success: (resp) => {
                    console.warn("[apiDeleteUserThunk] success",resp);
                    return resolve(resp);
                },
                error: (resp) => {
                    console.warn("[apiDeleteUserThunk] error", arguments);
                    return reject(resp);
                }
            });
        }).then((resp) => {
            console.warn(resp);
            return dispatch(apiGetUsersThunk());
        }).catch((resp) => {
            console.warn(resp);
            return dispatch(apiDeleteUserFailure(resp))
        });
    }
}