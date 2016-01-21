import React from "react";
import {connect} from "react-redux";

import {UserListItemPopover} from "./UserListItemPopover.js"
import * as userActions from "../../actions/user";

export const UserListItem = React.createClass({
    render: function(){
        return <tr data-index={this.props.index}>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.email}</td>
            <td>
                <UserListItemPopover {...this.props} />
            </td>
        </tr>
    }
});

let mapStateToProps = (state) => {
    return {
        list: state.get("list")
    }
};

export const UserListIntemContainer = connect(
    mapStateToProps,
    userActions
)(UserListItem);
