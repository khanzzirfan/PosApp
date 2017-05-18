import React, { Component, PropTypes } from 'react';
import CheckoutCartItemComponent from 'components/PosMain/CheckoutCart/CheckoutCartItemComponent';

class MainCheckoutComponent extends Component {

    componentDidMount(){

    }

    /**Update nesteed checkout transaction item quantity */
    handleOnTransactionUpdate = () => {
        if(this.props.onTransactionUpdate){
            this.props.onTransactionUpdate();
        }
    }

    createTransactionList = (transactionItem, onTransactionUpdate) => {
        let menuName = transactionItem.menuName;
        let price = transactionItem.menuPrice;
        let quantity = transactionItem.quantity;
        let transactionId = transactionItem.transactionId;

        return (
            <CheckoutCartItemComponent key={"transactionId_"+transactionId}
                            itemName = {menuName}
                            itemPrice = {price}
                            itemQuantity = {quantity}
                            transactionId = {transactionId}
                            onTransactionUpdate = {this.handleOnTransactionUpdate}
                        />
        );
    }

    render() {
        const {transactions,
               onTransactionUpdate} = this.props;
               
        
        return (

            <div className="chat-panel panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-shopping-cart"></i> Shopping cart
                </div>
                <div className="panel-body">
                    <div className="list-group">
                        { transactions.length > 0 &&
                            transactions.map((e) => this.createTransactionList(e, onTransactionUpdate))
                        }
                        
                    </div>
                </div>
                <div className="panel-footer">
                    <a href="#" className="btn btn-default btn-block">Check out</a>
                </div>
            </div>
        );
    }
}

MainCheckoutComponent.propTypes = {
    transactions: PropTypes.array,
    onTransactionUpdate: PropTypes.func,
};

export default MainCheckoutComponent;


/*
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
                        />*/