import {Map, List} from "immutable";
import React from "react";

import * as _ from "underscore";

export const UserPopup = React.createClass({
    getInitialStateValues: function(){
        return {
            id: 0,
            name: "",
            email: ""
        }
    },
    getInitialState: function(){
        return this.getInitialStateValues();
    },
    componentWillReceiveProps: function(nextProps){
        this.setState(function(){
            return _.defaults(nextProps.popup.user || {}, this.getInitialState())
        })
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

        this.props.upsertUser(this.state);
        this.onCancel();
    },
    resetState: function(){
        this.replaceState(this.getInitialStateValues());
    },
    onCancel: function(){
        this.resetState();
        this.props.uiPopupClose();
    },
    render: function(){
        return (this.props.popup && this.props.popup.isVisible)
            ? <div className="popup">
                <form onSubmit={this.onSubmit}>
                    <input type="hidden" name="id" ref="id" value={this.state.id} onChange={this.handleChange} />
                    <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="email" ref="email" value={this.state.email} onChange={this.handleChange} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => this.onCancel()}>Cancel</button>
                </form>
            </div>
            : null
    }
});