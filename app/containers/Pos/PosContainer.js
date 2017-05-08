import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PosHomeLayout from 'components/PosMain/PosHomeLayout';

class PosContainer extends Component {

  constructor() {
    super();
    let dummyObject = {};
    this.state = {
      menuObject: dummyObject,
    };
  }

  componentDidMount() {
    
  }

  handleOnClickMenuItem = (menuObject) =>
  {
    
  }

  render() {
    
    const {  } = this.props;

    return (
      <div className="container-wrapper">
        <PosHomeLayout menuObject ={this.state.menuObject} onMenuClick = {this.handleOnClickMenuItem}/>
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
