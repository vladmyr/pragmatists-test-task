import {Map} from "immutable";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/user";

// const store = createStore(reducer);
// store.getState();
// store.dispatch({});
// store.subscribe(() => {});

const logState = store => next => action => {
    console.warn("[action]", action);
    return next(action);
};

const createStoreWithMiddleware = applyMiddleware(
    //thunk,
    logState
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