import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getmenuitems from 'containers/Pos/actions/pos-actions';
import PosHomeLayout from 'components/PosMain/PosHomeLayout';
import * as TransactionActions from 'containers/Transactions/actions/transaction-actions';

class PosContainer extends Component {
  constructor() {
    super();

    let dummyObject = {};
    this.state = {
      menuObject: dummyObject,
    };

    //setup bindings;
    this.handleUpdateTransactionItem = this.handleUpdateTransactionItem.bind(this);
  }

  handleUpdateTransactionItem(transactionItem){
    this.props.transactionActions.updateTransaction(transactionItem);
  }

  componentDidMount() {
    this.props.transactionActions.getTransactions();
  }

  handleOnClickMenuItem = (menu) =>
  {
    console.log(">>>>>> menu item click");
    console.log(menu);
    this.setState({menuObject: menu});
  }

  render() {
    
    const {menuItems, isLoading, transactions  } = this.props;
    console.log(">>> pringint menu items");
    console.log(menuItems);

    return (
      <div className="container-wrapper">
        <PosHomeLayout menuObject ={this.state.menuObject} 
              onMenuClick = {this.handleOnClickMenuItem}
              transactions = {transactions}
              onTransactionUpdate = {handleUpdateTransactionItem}
              />
      </div>
    );
  }
}

PosContainer.propTypes={
  menuItems: PropTypes.object,
  isLoading: PropTypes.bool,
  transactions: PropTypes.array,

}

function mapState(state) {
  return {
    menuItems: state.PosReducer.menuItems,
    isLoading: state.PosReducer.isLoading,
    transactions: state.TransactionReducer.transactions,
  };
}

function mapDispatch(dispatch) {
  return {
    transactionActions: bindActionCreators(TransactionActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(PosContainer);
