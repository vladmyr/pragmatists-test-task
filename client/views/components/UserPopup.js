import {Map, List} from "immutable";
import React from "react";

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
    getInitialState: function(){
        return {
            id: this.props.popup.user.id || 0,
            name: this.props.popup.user.name || "",
            email: this.props.popup.user.email || ""
        }
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

        console.log(this.state);
    },
    render: function(){
        return <form onSubmit={this.onSubmit}>
            <input type="hidden" name="id" ref="id" onChange={this.handleChange} />
            <input type="text" name="name" ref="name" onChange={this.handleChange} />
            <input type="text" name="email" ref="email" value={this.state.email} onChange={this.handleChange} />
            <button type="submit">Save</button>
        </form>
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