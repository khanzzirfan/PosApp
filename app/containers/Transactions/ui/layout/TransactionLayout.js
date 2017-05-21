import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TransactionsTableComponent from 'containers/Transactions/ui/component/TransactionsTableComponent';
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
        return (
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-8">
                        <FormGroup>
                            <InputGroup>
                                <FormControl type="text" placeholder="search/add items" />
                                <InputGroup.Addon>
                                    <button type="button" className="btn btn-xs">
                                        <span className="fa fa-plus-square fa-1x"></span>
                                    </button>
                                </InputGroup.Addon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <TransactionsTableComponent />
                        </FormGroup>
                    </div>
                </div>
            </div>

        );
    }
}

TransactionLayout.propTypes = {
    onMenuClick: PropTypes.func,
    toggleSideNav: PropTypes.bool,
};

export default TransactionLayout;