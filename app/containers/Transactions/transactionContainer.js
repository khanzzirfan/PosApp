import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionLayout from 'containers/Transactions/ui/layout/TransactionLayout';
import AppContainer from 'components/common/AppContainer';

class TransactionContainer extends Component {
 
    render() {
        
        const {transactions} = this.props;
        //console.log(">>> pringint menu items");
        //console.log(menuItems);

        return (
        <div className="container-wrapper">
          <AppContainer />
           <TransactionLayout 
            />
        </div>
        );
    }
}

TransactionContainer.propTypes={
  transactions: PropTypes.array,
}

function mapState(state) {
  return {
    tranactions: state.TransactionReducer.transactions
    // isLoading: state.PosReducer.isLoading,
  };
}

function mapDispatch(dispatch) {
  return {
    //actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(TransactionContainer);
