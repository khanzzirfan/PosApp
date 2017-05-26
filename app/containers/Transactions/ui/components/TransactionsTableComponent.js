import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TransactionsTableComponent extends Component {
    constructor(props, context) {
        super(props, context);

    }

    createTransactionItemRow = (transactionItem) => {
        return (
            <tr>
                <td>{""}</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        );
    }

    render() {
        const {transactions} = this.props;
        
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty.</th>
                            <th>Discount %</th>
                            <th>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        
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