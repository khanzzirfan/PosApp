import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PosHomeLayout from 'components/PosMain/PosHomeLayout';

class PosContainer extends Component {

  componentDidMount() {
    
  }

  render() {
    const {  } = this.props;

    return (
      <div className="container-wrapper">
        <PosHomeLayout />
      </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    //actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(PosContainer);
