import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionsTableComponent from 'containers/Transactions/ui/components/TransactionsTableComponent';
import TransactionSummaryComponent from 'containers/Transactions/ui/components/TransactionSummaryComponent';
import TransactionPaymentComponent from 'containers/Transactions/ui/components/TransactionPaymentComponent';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class TransactionLayout extends Component {
    constructor(props) {
        super(props);

    }

    handleOnToggleClick = () => {
        if (this.props.onToggleSideNavClick)
            this.props.onToggleSideNavClick();
    }

    handleOnMenuClick = () => {
        if (this.props.onMenuClick) {
            this.props.onMenuClick();
        }
    }

    render() {
        const { transactions } = this.props;
        console.log("printing transactions");
        console.log(transactions);
        return (
            <div id="page-wrapper">
                <div className="row">
                    {/*left side transactions component*/}
                    <div className="col-lg-8">
                        <div className="app-theme-main-right-border">
                            <div className="form-group">
                                <InputGroup>
                                    <FormControl type="text" placeholder="search/add items" />
                                    <InputGroup.Addon>
                                        <button type="button" className="btn btn-xs">
                                            <span className="fa fa-plus-square fa-1x"></span>
                                        </button>
                                    </InputGroup.Addon>
                                </InputGroup>
                            </div>
                            {/*Eof Search and add item*/}

                            <TransactionsTableComponent transactions={transactions} />
                            <TransactionSummaryComponent />
                        </div>

                    </div>

                    {/*Right side checkout component*/}
                    <div className="col-lg-4 app-theme-main-row-no-left-margin">
                        <TransactionPaymentComponent />
                    </div>

                </div>
            </div>
        );
    }
}

TransactionLayout.propTypes = {
    transactions: PropTypes.array,
    onMenuClick: PropTypes.func,
    toggleSideNav: PropTypes.bool,
};

export default TransactionLayout;