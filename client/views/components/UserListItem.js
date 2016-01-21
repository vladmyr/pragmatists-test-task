import React from "react";
import {connect} from "react-redux";

import * as userActions from "../../actions/user";

export const UserListItem = React.createClass({
    render: function(){
        return <li data-index={this.props.index}>
        {this.props.item.name} - {this.props.item.email}
        </li>
    }
});

let mapStateToProps = (state) => {
    return {
        list: state.list
    }
};

export const UserListIntemContainer = connect(
    mapStateToProps,
    userActions
)(UserListItem);
