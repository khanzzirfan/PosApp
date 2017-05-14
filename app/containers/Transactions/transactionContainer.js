import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getmenuitems from 'containers/Pos/actions/pos-actions';
import PosHomeLayout from 'components/PosMain/PosHomeLayout';

class TransactionContainer extends Component {
 
    render() {
        
        const {menuItems, isLoading  } = this.props;
        console.log(">>> pringint menu items");
        console.log(menuItems);

        return (
        <div className="container-wrapper">
            hello
        </div>
        );
    }
}

TransactionContainer.propTypes={
  transactions: PropTypes.array,
}

function mapState(state) {
  return {
    tranactions: state.TranactionReducer.transactions
    // isLoading: state.PosReducer.isLoading,
  };
}

function mapDispatch(dispatch) {
  return {
    //actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(TransactionContainer);
