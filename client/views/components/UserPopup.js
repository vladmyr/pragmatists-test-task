import {Map, List} from "immutable";
import React from "react";

import * as _ from "underscore";

export const UserPopup = React.createClass({
    getInitialStateValues: function(){
        return {
            name: "",
            email: ""
        }
    },
    getInitialState: function(){
        return _.extend(
            this.getInitialStateValues(),
            _.has(this.props, "popup", "user")
                ? this.props.popup.user
                : {});
    },
    handleChange: function(e){
        this.setState(function(){
            return {
                [e.target.name]: e.target.value
            }
        });
    },
    onSubmit: function(e){
        e.preventDefault();

        // add validation

        this.props.createUser(this.state);
        this.onCancel();
    },
    resetState: function(){
        this.replaceState(this.getInitialStateValues());
    },
    onCancel: function(){
        this.resetState();
        this.props.uiPopupClose();
    },
    getEmail() {
        console.warn("[getEmail]", this.props);
        return this.props.user.email || this.state.user.email
    },
    render: function(){
        return (this.props.popup && this.props.popup.isVisible)
            ? <div className="popup">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" ref="name" value={this.getEmail()} onChange={this.handleChange} />
                    <input type="text" name="email" ref="email" value={this.state.email} onChange={this.handleChange} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => this.onCancel()}>Cancel</button>
                </form>
            </div>
            : null
    }
});