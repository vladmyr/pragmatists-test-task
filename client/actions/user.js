export const LIST_USERS = "LIST_USERS";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const UI_POPOVER_MANAGE_USER = "UI_USER_MANAGE_POPOVER";
export const UI_POPUP_CREATE_USER = "UI_POPUP_CREATE_USER";
export const UI_POPUP_UPDATE_USER = "UI_POPUP_UPDATE_USER";

export function setUserList(list){
    return {
        type: LIST_USERS,
        list: list
    }
}

/**
 * Action creator. Create new user
 * @param   {Object} user
 * @returns {Object}
 */
export function createUser(user){
    return {
        type: CREATE_USER,
        user: user
    }
}

/**
 * Action creator. Update existing user
 * @param   {Object} user
 * @returns {Object}
 */
export function updateUser(user){
    return {
        type: UPDATE_USER,
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
        user: {
            id: id
        }
    }
}

//export function uiPopoverManageUser(){
//
//}

/**
 * Action creator. Render popup window
 */
export function uiPopupCreateUser(){
    return {
        type: UI_POPUP_CREATE_USER
    }
}

/**
 * Action creator. Render popup window
 * @param user
 */
export function uiPopupUpdateUser(user = {}){
    return {
        type: UI_POPUP_UPDATE_USER,
        user: user
    }
}