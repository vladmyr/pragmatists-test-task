import * as _ from "underscore";
import React from "react";
import {connect} from "react-redux";

import * as userActions from "../../actions/user";

export const UserListItemPopover = React.createClass({
    toggleVisible: function(){
        return this.getIsOpened()
            ? this.props.uiPopoverClose()
            : this.props.uiPopoverOpen(this.props.index);
    },
    getIsOpened: function(){
        return this.props.popover.isVisible && (this.props.popover.index == this.props.index) || false
    },
    render: function(){
        return <div className={"btn-group" + (this.getIsOpened() ? " open" : "")}>
            <button type="button" className="btn btn-xs btn-default" onClick={() => this.toggleVisible()}>
                <i className="fa fa-cogs"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
                <li>
                    <a onClick={() => {this.props.uiPopupUpdateUser(this.props.index, this.props.item)}}>Edit</a>
                </li>
                <li>
                    <a onClick={() => {this.props.apiDeleteUserThunk(this.props.item.id)}}>Remove</a>
                </li>
            </ul>
        </div>
    }
});
