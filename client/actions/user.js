export const LIST_USERS = "LIST_USERS";
export const UPSERT_USER = "UPSERT_USER";
export const DELETE_USER = "DELETE_USER";
export const UI_POPOVER_OPEN = "UI_POPOVER_OPEN";
export const UI_POPOVER_CLOSE = "UI_POPOVER_CLOSE";
export const UI_POPUP_OPEN = "UI_POPUP_OPEN";
export const UI_POPUP_CLOSE = "UI_POPUP_CLOSE";

/**
 * Action creator. Set list of users
 * @param   {Array.<Object>}    list
 * @returns {Object}
 */
export function setUserList(list){
    return {
        type: LIST_USERS,
        list: list
    }
}

/**
 * Action creator. Create/update new user
 * @param   {Object} user
 * @returns {Object}
 */
export function upsertUser(user){
    return {
        type: UPSERT_USER,
        user: user
    }
}

/**
 * Action creator. Delete existing user
 * @param   {Number} id
 * @returns {Object}
 */
export function deleteUser(id){
    return {
        type: DELETE_USER,
        id: id
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
 * @param index
 * @param user
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
 */
export function uiPopupClose(){
    return {
        type: UI_POPUP_CLOSE
    }
}

/**
 * Action creator. Open popover window
 */
export function uiPopoverOpen(index = -1){
    return {
        type: UI_POPOVER_OPEN,
        index: index
    }
}

/**
 * Action creator. Close popover window
 */
export function uiPopoverClose(){
    return {
        type: UI_POPOVER_CLOSE
    }
}