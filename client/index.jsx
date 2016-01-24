import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Router, {Route} from "react-router";
import Backbone from "backbone";
import {Map, List} from "immutable";

import * as userActions from "./actions/user";
import App from "./views/components/App";
import {UserContainer} from "./views/components/User";

const store = configureStore(Map({}));
store.subscribe(() => {
    console.warn("[state]", store.getState());
});
store.dispatch(userActions.apiGetUsersThunk());

const routes = <Route component={App}>
    <Route path="/" component={UserContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById("app")
);
