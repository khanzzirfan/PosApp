import React, { Component, PropTypes } from 'react';

class MainCheckoutComponent extends Component {
    render() {
        return (

            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-shopping-cart"></i> Shopping cart
                </div>
                <div className="panel-body">
                    <div className="list-group">
                        <a href="#" className="list-group-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <span> 1. Fruit Salad </span>
                                </div>
                                <div className="col-lg-4">
                                    <span className="pull-right">$40.00</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-1">
                                    <i className="fa fa-plus-square fa-2x">  </i>
                                </div>
                                <div className="col-xs-1">
                                    <i className="fa fa-2x">10 </i>
                                </div>
                                <div className="col-xs-1">
                                    <i className="fa fa-minus-square fa-2x">   </i>
                                </div>
                                <div className="col-xs-offset-9">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

MainCheckoutComponent.propTypes = {

};

export default MainCheckoutComponent;