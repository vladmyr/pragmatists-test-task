import React from "react";
import {connect} from "react-redux";

import * as userActions from "../../actions/user";
import {UserListItem} from "./UserListItem";

export const UserList = React.createClass({
    render: function(){
        return<ul>
            {this.props.list
                ? this.props.list.map((item, index) => {
                    return <UserListItem item={item} key={index} />
                })
                : <li>There are no records</li>}
        </ul>
    }
});

let mapStateToProps = (state) => {
    return {
        list: state.get("list").toArray()
    }
};

export const UserListContainer = connect(
    mapStateToProps,
    userActions
)(UserList);