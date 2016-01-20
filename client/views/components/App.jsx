import React from "react";

import * as userActions from "../../actions/user";
import {UserList} from "./UserList";

export const App = React.createClass({
    render: function(){
        return <div>
            <h1>App component</h1>
            <UserList {...this.props} />
        </div>
    }
});

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
};

//export const AppContainer = connect(
//    mapStateToProps,
//    userActions
//)(App);

