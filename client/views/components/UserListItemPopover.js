import * as _ from "underscore";
import React from "react";
import {connect} from "react-redux";

export const UserListItemPopover = React.createClass({
    getInitialState: function(){
        return {
            isOpened: _.has(this.props, "popover")
                ? (this.props.popover === this.props.index)
                : false
        }
    },
    toggleVisible: function(){

    },
    render: function(){
        return <div className={"btn-group" + (this.state.isOpened ? "open" : "")}>
            <button type="button" className="btn btn-default" onClick={() => this.state.isOpened
                ? this.props.uiPopoverOpen(this.props.index)
                : this.props.uiPopoverClose()
             }>
                <i className="fa fa-cogs"></i>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a onClick={() => {}}>Edit</a>
                </li>
                <li>
                    <a onClick={() => {}}>Remove</a>
                </li>
            </ul>
        </div>
    }
});
