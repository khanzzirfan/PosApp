import React, { Component, PropTypes } from 'react';
import CheckoutCartItemComponent from 'components/PosMain/CheckoutCart/CheckoutCartItemComponent';

class MainCheckoutComponent extends Component {
    render() {
        return (

            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-shopping-cart"></i> Shopping cart
                </div>
                <div className="panel-body">
                    <div className="list-group">
                        <CheckoutCartItemComponent 
                            itemName = {"Fruit salad"}
                            itemPrice = {"10.00"}
                            itemQuantity = {5}
                            itemNumber = {1}
                        />
                        <CheckoutCartItemComponent 
                            itemName = {"Cucumber salad"}
                            itemPrice = {"10.00"}
                            itemQuantity = {3}
                            itemNumber = {2}
                        />
                        <CheckoutCartItemComponent 
                            itemName = {"Tomato salad"}
                            itemPrice = {"10.00"}
                            itemQuantity = {9}
                            itemNumber = {3}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

MainCheckoutComponent.propTypes = {

};

export default MainCheckoutComponent;