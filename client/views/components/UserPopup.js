import {Map, List} from "immutable";
import React from "react";

import * as _ from "underscore";

export const UserPopup = React.createClass({
    //onSubmit: (e) => {
    //    e.preventDefault();
    //    let formData = {
    //        id: React.findDOMNode(this.refs.id).value,
    //        name: React.findDOMNode(this.refs.name).value,
    //        email: React.findDOMNode(this.refs.email).value
    //    };
    //    console.warn("[popup]", formData, this);
    //},
    //onClose: (e) => {
    //    e.preventDefault();
    //    return this.props.uiPopupClose();
    //},
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
    render: function(){
        return (this.props.popup && this.props.popup.isVisible)
            ? <div className="popup">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="email" ref="email" value={this.state.email} onChange={this.handleChange} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => this.onCancel()}>Cancel</button>
                </form>
            </div>
            : null
    }
});

//<div>
//            {(this.props.popup && this.props.popup.isVisible)
//                ? <div className="popup">
//                <form>
//                    <input type="hidden" name="id" ref="id" value={this.props.popup.user.id || 0} onChange={this.handleChange} />
//                    <input type="text" name="name" ref="name" value={this.props.popup.user.name || ""} onChange={this.handleChange} />
//                    <input type="text" name="email" ref="email" value={this.props.popup.user.email || ""} onChange={this.handleChange} />
//                </form>
//            </div>
//                : null}
//</div>