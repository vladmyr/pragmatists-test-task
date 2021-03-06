import React from "react";
import {connect} from "react-redux";

import {UserListItemContainer} from "./UserListItem";
import * as userActions from "../../actions/user";

export const UserList = React.createClass({
    render: function(){
        return <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.length
                        ? this.props.list.map((item, index) => {
                            return <UserListItemContainer key={index} item={item} index={index} popover={this.props.popover}/>
                        })
                        : <tr><td colSpan="3">There are no records</td></tr>}
                </tbody>
            </table>
        </div>
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