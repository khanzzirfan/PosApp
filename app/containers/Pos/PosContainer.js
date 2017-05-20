import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getmenuitems from 'containers/Pos/actions/pos-actions';
import PosHomeLayout from 'components/PosMain/PosHomeLayout';
import * as TransactionActions from 'containers/Transactions/actions/transaction-actions';
import AppContainer from 'components/common/AppContainer';

class PosContainer extends Component {
  constructor(props) {
    super(props);

    let dummyObject = {};
    this.state = {
      menuObject: dummyObject,
      width: window.innerWidth, /**decide mobile width */
      toggleSideNav: false,
    };

    //setup bindings;
    //this.handleUpdateTransactionItem = this.handleUpdateTransactionItem.bind(this);
    //this.handleOnToggleSideNavClick = this.handleOnToggleSideNavClick.bind(this);
    //this.handleOnClickMenuItem = this.handleOnClickMenuItem.bind(this);
  }

  handleUpdateTransactionItem = (transactionItem) => {
    console.log(">>> updating transaction item");
    console.log(transactionItem)
    this.props.transactionActions.updateTransaction(transactionItem);
  }

  /*Add menu item to checkout component */
  handleOnAddItem = (addItem) => {
    console.log(">>> adding transaction item");
    console.log(addItem)
    this.props.transactionActions.addTransaction(addItem);
  }

  componentDidMount() {
    this.props.transactionActions.getTransactions();
  }

  handleOnClickMenuItem = (menu) => {
    console.log(">>>>>> menu item click");
    console.log(menu);
    this.setState({ menuObject: menu });
  }

  render() {

    const { menuItems, isLoading, transactions } = this.props;
    console.log(">>> pringint menu items");
    console.log(menuItems);
    const { width, toggleSideNav } = this.state;
    const isMobile = width <= 768;

    return (
      <div className="container-wrapper">
        <AppContainer />
        <PosHomeLayout menuObject={this.state.menuObject}
          transactions={transactions}
          onTransactionUpdate={this.handleUpdateTransactionItem}
          onAddItemClick={this.handleOnAddItem}
        />
      </div>
    );
  }
}

PosContainer.propTypes = {
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
