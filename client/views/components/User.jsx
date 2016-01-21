import {Map, List} from "immutable";
import React from "react";
import {connect} from "react-redux";

import * as userActions from "../../actions/user";
import {UserList} from "./UserList";
import {UserPopup} from "./UserPopup";

export const User = React.createClass({
    render: function(){
        return <div>
            <UserList {...this.props} />
            <button onClick={() => this.props.uiPopupCreateUser()}>Create new</button>
            <button onClick={() => this.props.createUser({ name: "superuser", email: "superuser@example.com" })}>Autocreate item</button>
            <UserPopup {...this.props} />
        </div>
    }
});

function mapStateToProps(state) {
    return {
        list: state.get("list").toArray(),
        popup: (state.get("popup") || Map()).toObject(),
        popover: (state.get("popover") || Map()).toObject()
    }
};

export const UserContainer = connect(
    mapStateToProps,
    userActions
)(User);

