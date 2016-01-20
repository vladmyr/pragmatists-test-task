import React from "react";
import {connect} from "react-redux";

import * as userActions from "../../actions/user";
import UserList from "./UserList";

export const User = React.createClass({
    render: function(){
        return <div>
            //<UserList {...this.props} />
        </div>
    }
});

let mapStateToProps = (state) => {
    return {
        list: state.list
    }
};

export const UserContainer = connect(
    mapStateToProps,
    userActions
)(User);

