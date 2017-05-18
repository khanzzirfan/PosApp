import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getmenuitems from 'containers/Pos/actions/pos-actions';
import PosHomeLayout from 'components/PosMain/PosHomeLayout';
import * as TransactionActions from 'containers/Transactions/actions/transaction-actions';

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
    this.handleOnToggleSideNavClick = this.handleOnToggleSideNavClick.bind(this);
    //this.handleOnClickMenuItem = this.handleOnClickMenuItem.bind(this);
  }

  handleUpdateTransactionItem = (transactionItem) => {
    console.log(">>> updating transaction item");
    console.log(transactionItem)
    this.props.transactionActions.updateTransaction(transactionItem);
  }

  componentDidMount() {
    this.props.transactionActions.getTransactions();
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleOnToggleSideNavClick = () => {
    console.log(">>> handleOnToggleSideNavClick");
    this.setState({toggleSideNav: !this.state.toggleSideNav});
  }

  handleOnClickMenuItem = (menu) =>  {
    console.log(">>>>>> menu item click");
    console.log(menu);
    this.setState({menuObject: menu});
  }

  render() {
    
    const {menuItems, isLoading, transactions  } = this.props;
    console.log(">>> pringint menu items");
    console.log(menuItems);
    const { width, toggleSideNav } = this.state;
    const isMobile = width <= 768;

    return (
      <div className="container-wrapper">
        <PosHomeLayout menuObject ={this.state.menuObject} 
              onMenuClick = {this.handleOnClickMenuItem}
              transactions = {transactions}
              onTransactionUpdate = {this.handleUpdateTransactionItem}
              isMobile = {isMobile}
              toggleSideNav = {this.state.toggleSideNav}
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
