import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Router, {Route} from "react-router";
import Backbone from "backbone";

import User from "./models/user"
import UsersCollection from "./collections/users";
import * as userActions from "./actions/user";
import App from "./views/components/App";
import {UserContainer} from "./views/components/User";

let list = [{
    id: "0",
    name: "user001",
    email: "user001@example.com"
},{
    id: "1",
    name: "user002",
    email: "user002@example.com"
},{
    id: "2",
    name: "user003",
    email: "user003@example.com"
},{
    id: "3",
    name: "user004",
    email: "user004@example.com"
},{
    id: "4",
    name: "user005",
    email: "user005@example.com"
},{
    id: "5",
    name: "user006",
    email: "user006@example.com"
},{
    id: "6",
    name: "user007",
    email: "user007@example.com"
}];

const store = configureStore(userActions.setUserList(list));

store.subscribe(() => {
    console.warn("[state]", store.getState());
});
// --
//let user = new User({ id: 1 });
//
//user.fetch({
//    success: function(){
//        console.log(arguments);
//    },
//    error: function(){
//        console.log(arguments);
//    }
//});
//
//let users = new UsersCollection();
//
//users.fetch({
//    success: function(){
//        console.log(arguments);
//    },
//    error: function(){
//        console.log(arguments);
//    }
//});
// --

const routes = <Route component={App}>
    <Route path="/" component={UserContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router>{routes}</Router>
    </Provider>,
    document.getElementById("app")
);

//const render = () => {
//    console.log("render...");
//    ReactDOM.render(
//        <Provider store={store}>
//            <App list={store.getState().list} />
//        </Provider>,
//        document.getElementById("app")
//    );
//};
//
//store.subscribe(render);
//render();
//store.dispatch(userActions.setUserList(list));
