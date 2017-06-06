import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TransactionSummaryComponent extends Component {
    render() {
        return (
            <div>
                <div className="row row-inverse">
                    <div className="col-lg-6">
                        <div className="row">
                            <label className="control-label col-sm-4" for="email">Sub Total:</label>
                            <div className="col-sm-8">
                                <span>7.50</span>
                            </div>
                        </div>
                    </div>
                    {/*Eof Sub Total*/}
                    <div className="col-lg-6">
                        <div className="row">
                            <label className="control-label col-sm-4" for="email">Total:</label>
                            <div className="col-sm-8">
                                <span>7.50</span>
                            </div>
                        </div>
                    </div>
                    {/*Eof Total*/}
                </div>
                <div className="row row-inverse">
                    <div className="col-lg-6">
                        <div className="row">
                            <label className="control-label col-sm-4" for="email">Discount:</label>
                            <div className="col-sm-8">
                                <span>1.50</span>
                            </div>
                        </div>
                    </div>
                    {/*Eof Discount*/}
                </div>
                <div className="row row-inverse">
                    <div className="col-lg-6">
                        <div className="row">
                            <label className="control-label col-sm-4" for="email">Tax:</label>
                            <div className="col-sm-8">
                                <span>1.24</span>
                            </div>
                        </div>
                    </div>
                    {/*Eof Tax*/}
                    <div className="col-lg-6">
                        <div className="row">
                            <label className="control-label col-sm-4" for="email">Balance:</label>
                            <div className="col-sm-8">
                                <span>3.24</span>
                            </div>
                        </div>
                    </div>
                    {/*Eof Balance*/}
                </div>

                <div className="row row-inverse">
                    <div className="col-lg-offset-6 col-lg-6">
                        <div className="btn-toolbar" role="toolbar">
                            <button type="button" className="btn btn-primary col-lg-3">Hold order</button>
                            <button type="button" className="btn btn-primary col-lg-3">Cancel</button>
                            <button type="button" className="btn btn-primary col-lg-3">Save</button>
                        </div>
                    </div>
                    {/*Eof Buttons*/}
                </div>
            </div>
        );
    }
}

TransactionSummaryComponent.propTypes = {

};

export default TransactionSummaryComponent;