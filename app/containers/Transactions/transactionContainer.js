import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionLayout from 'containers/Transactions/ui/layout/TransactionLayout';
import AppContainer from 'components/common/AppContainer';
import * as TransactionActions from 'containers/Transactions/actions/transaction-actions';

class TransactionContainer extends Component {

  componentDidMount() {
    this.props.transactionActions.getTransactions();
  }

  render() {

    const { transactions } = this.props;
    //console.log(">>> pringint menu items");
    //console.log(menuItems);

    return (
      <div className="container-wrapper">
        <AppContainer />
        <TransactionLayout
          transactions={transactions} />
      </div>
    );
  }
}

TransactionContainer.propTypes = {
  transactions: PropTypes.array,
}

function mapState(state) {
  return {
    transactions: state.TransactionReducer.transactions
    // isLoading: state.PosReducer.isLoading,
  };
}

function mapDispatch(dispatch) {
  return {
    transactionActions: bindActionCreators(TransactionActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(TransactionContainer);
