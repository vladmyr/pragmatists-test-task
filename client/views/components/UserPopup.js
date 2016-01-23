import {Map, List} from "immutable";
import React from "react";
import {Modal} from "react-bootstrap";

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
    getIsVisible: function(){
        return this.props.popup && this.props.popup.isVisible;
    },
    render: function(){
        return <Modal show={this.getIsVisible()} onHide={this.onCancel}>
            <Modal.Header>
                <Modal.Title>Edit user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={this.onSubmit}>
                                    <input type="hidden" name="id" ref="id" value={this.state.id} onChange={this.handleChange} />
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" ref="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" ref="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="btn-toolbar">
                        <button className="pull-right btn btn-default" type="button" onClick={() => this.onCancel()}>Cancel</button>
                        <button className="pull-right btn btn-default" type="submit">Save</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    }
});