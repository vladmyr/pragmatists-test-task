import * as _ from "underscore";
import React from "react";
import {connect} from "react-redux";

import * as userActions from "../../actions/user";

export const UserListItemPopover = React.createClass({
    updateState: function(){
        this.setState({
            isOpened: _.has(this.props, "popover")
                ? this.props.popover.isVisible && (this.props.popover.index == this.props.index) || false
                : false
        });
    },
    toggleVisible: function(){
        return this.getIsOpened()
            ? this.props.uiPopoverClose()
            : this.props.uiPopoverOpen(this.props.index);
    },
    getIsOpened: function(){
        return this.props.popover.isVisible && (this.props.popover.index == this.props.index) || false
    },
    render: function(){
        console.warn("[UserListItemPopover] render", this.props, this.getIsOpened());

        return <div className={"btn-group" + (this.getIsOpened() ? " open" : "")}>
            <button type="button" className="btn btn-default" onClick={() => this.toggleVisible()}>
                <i className="fa fa-cogs"></i>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a onClick={() => {this.props.uiPopupUpdateUser(this.props.index, this.props.item)}}>Edit</a>
                </li>
                <li>
                    <a onClick={() => {}}>Remove</a>
                </li>
            </ul>
        </div>
    }
});
