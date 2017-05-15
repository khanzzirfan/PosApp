import React, { Component, PropTypes } from 'react';

class CheckoutCartItemComponent extends Component {
    constructor(){
        super();
        this.updateTransaction = this.updateTransaction.bind(this);
    }

    updateTransaction(transactionId) {
        
    }

    render() {
        const {
            itemName,
            itemQuantity,
            itemPrice,
            transactionId,
            onTransactionUpdate
        } = this.props;

        let formattedName = `${transactionId}. ${itemName}`;
        let price = `$${itemPrice}`;        
        let totalAmount = `$${itemPrice * itemQuantity}.00`;

        let itemQuantityrowSeperate = {marginTop:"6px"};
        let itemNamePaddingLeft = {paddingLeft:"0px"};
        return (
        <div>
            <a href="#" className="list-group-item">
                <div className="row">
                    <div className="col-lg-6 text-left">
                        <span>{transactionId}. {itemName}</span>
                    </div>
                    <div className="col-lg-6 text-right">
                        <span>{price}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1">
                        <span>Qty</span>
                    </div>
                    <div className="col-xs-1">
                        <i className="fa fa-plus-square fa-1x" onClick={updateTransaction(transactionId)}>  </i>
                    </div>
                    <div className="col-xs-1">
                        <i className="fa fa-1x">{itemQuantity} </i>
                    </div>
                    <div className="col-xs-1">
                        <i className="fa fa-minus-square fa-1x">   </i>
                    </div>
                    <div className="col-xs-7 text-right">
                        <span>Amount <i>{totalAmount}</i></span> 
                    </div>
                </div>
            </a>
        </div>
        );
    }
}

CheckoutCartItemComponent.propTypes = {
    itemName: PropTypes.string,
    itemQuantity: PropTypes.number,
    itemPrice: PropTypes.number,
    transactionId: PropTypes.number,
    onTransactionUpdate: PropTypes.func,
}

export default CheckoutCartItemComponent 