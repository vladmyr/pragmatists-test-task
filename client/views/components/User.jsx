import {Map, List} from "immutable";
import React from "react";
import {connect} from "react-redux";

import * as userActions from "../../actions/user";
import {UserList} from "./UserList";
import {UserPopup} from "./UserPopup";

export const User = React.createClass({
    render: function(){
        return <div className="user-container col-lg-offset-2 col-md-offset-1 col-lg-8 col-md-10 col-sm-12">
            <UserList {...this.props} />
            <button className="btn btn-primary" onClick={() => this.props.uiPopupCreateUser()}>Create new</button>
            <UserPopup {...this.props} />
        </div>
    }
});

function mapStateToProps(state) {
    return {
        isProcessing: state.get("isProcessing"),
        list: (state.get("list") || List()).toArray(),
        popup: (state.get("popup") || Map()).toObject(),
        popover: (state.get("popover") || Map()).toObject()
    }
}

export const UserContainer = connect(
    mapStateToProps,
    userActions
)(User);

