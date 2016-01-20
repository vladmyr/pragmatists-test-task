import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

// const store = createStore(reducer);
// store.getState();
// store.dispatch({});
// store.subscribe(() => {});

//const createStoreWithMiddleware = applyMiddleware()

export default function configureStore(initialState){
    const store = createStore(reducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}