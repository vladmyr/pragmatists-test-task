import {Map} from "immutable";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "../reducers/user";

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

export default function configureStore(initialState = Map({})){
    const store = createStoreWithMiddleware(userReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/user', () => {
            const nextReducer = require('../reducers/user');
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}