import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TransactionsTableComponent extends Component {
    constructor(props, context) {
        super(props, context);

    }

    createTransactionItemRow = (transactionItem) => {
        console.log(transactionItem);
        let menuPrice = transactionItem.menuPrice;
        let quantity = transactionItem.quantity;
        let subTotal = menuPrice * quantity;
        return (
            <tr key={transactionItem.transactionId}>
                <td className="col-xs-1">{transactionItem.transactionId}</td>
                <td className="col-xs-1">{transactionItem.menuName}</td>
                <td className="col-xs-1">{menuPrice}</td>
                <td className="col-xs-1 text-left">
                    <button type="button" className="btn btn-xs" onClick={this.onAddMenuItem}>
                        <span className="fa fa-plus-square fa-1x"></span>
                    </button>
                    <span> {quantity} </span>
                    <button type="button" className="btn btn-xs" onClick={this.onRemoveMenuItem}>
                        <span className="fa fa-minus-square fa-1x"></span>
                    </button>
                </td>
                <td className="col-xs-1 text-center">0</td>
                <td className="col-xs-1 text-center col-xs-offset-6">{subTotal}</td>
            </tr>
        );
    }

    render() {
        const { transactions } = this.props;
        let transactionDetails = transactions && transactions.map(e => this.createTransactionItemRow(e));

        return (
            <div className="table-responsive">
                <table className="table app-theme-main-transaction-scollable">
                    <thead>
                        <tr>
                            <th className="col-xs-1 ">#</th>
                            <th className="col-xs-1">Name</th>
                            <th className="col-xs-1">Price</th>
                            <th className="col-xs-1">Qty.</th>
                            <th className="col-xs-1">Discount %</th>
                            <th className="col-xs-1 col-xs-offset-6">Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionDetails}
                        {transactionDetails}
                    </tbody>
                </table>
            </div>
        );
    }
}

TransactionsTableComponent.propTypes = {
    transactions: PropTypes.array,
};

export default TransactionsTableComponent;