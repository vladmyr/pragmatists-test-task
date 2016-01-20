import React from "react";

import * as userActions from "../../actions/user";

export const UserListItem = React.createClass({
    render: function(){
        return <li data-index={this.props.index}>
        {this.props.item.name} - {this.props.item.email}
        </li>
    }
});
