import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup, FormControl, Button, Form, Col, ControlLabel } from 'react-bootstrap';

class TransactionPaymentComponent extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label className="control-label"> Customer </label>
                                <input type="text" className="form-control" id="name" placeholder="xyz" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="text-left control-label col-sm-6"> Amount Tendered: </label>
                                <div className="col-sm-6">
                                    <label className="control-label"> 50.99 </label>
                                </div>
                            </div>
                        </form>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="text-left control-label col-sm-6"> Discount (%): </label>
                                <div className="col-sm-6">
                                    <label className="control-label"> 0.99 </label>
                                </div>
                            </div>
                        </form>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="text-left control-label col-sm-6"> Cash: </label>
                                <div className="col-sm-6">
                                    <input type="number" className="form-control" id="cash" placeholder="0.00" />
                                </div>
                            </div>
                        </form>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="text-left control-label col-sm-6"> Amount Due: </label>
                                <div className="col-sm-6">
                                    <label className="control-label"> 0.99 </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*Eof Panel default*/}
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-offset-1">
                        </div>
                        <div className="col-lg-11">
                            <div className="btn-toolbar col-lg-offset-2" role="toolbar">
                                <button type="button" className="btn btn-primary col-lg-3  app-theme-main-btn-round">Cash</button>
                                <button type="button" className="btn btn-primary col-lg-3 app-theme-main-btn-round">Credit</button>
                                <button type="button" className="btn btn-primary col-lg-3 app-theme-main-btn-round">Split</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-offset-1">
                        </div>
                        <div className="col-lg-11">
                            <div className="btn-toolbar col-lg-offset-2" role="toolbar">
                                <button type="button" className="btn btn-primary col-lg-3 app-theme-main-btn-round">Check</button>
                                <button type="button" className="btn btn-primary col-lg-3 app-theme-main-btn-round">Gift Card</button>
                                <button type="button" className="btn btn-primary col-lg-3 app-theme-main-btn-round">Credit+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-offset-1">
                        </div>
                        <div className="col-lg-11">
                            <div className="btn-toolbar col-lg-offset-2" role="toolbar">
                                <button type="button" className="btn btn-success col-lg-11 app-theme-main-btn-round">Sale Complete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TransactionPaymentComponent.propTypes = {

};

export default TransactionPaymentComponent;