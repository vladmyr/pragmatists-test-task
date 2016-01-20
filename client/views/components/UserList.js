import React from "react";
import {connect} from "react-redux";

import {UserListItem} from "./UserListItem";

export const UserList = React.createClass({
    render: function(){
        return <div>
            <ul>
            {this.props.list
                ? this.props.list.map((item, index) => {
                    return <UserListItem item={item} key={index} />
                })
                : <li>There are no records</li>}
            </ul>
            <button onClick={() => this.props.uiPopupCreateUser()}>Create new</button>
        </div>
    }
});

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
};

export const UserListContainer = {};