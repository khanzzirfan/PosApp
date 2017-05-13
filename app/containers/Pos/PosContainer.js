import React, { Component, PropTypes  } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getmenuitems from 'containers/Pos/actions/pos-actions';
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

  handleOnClickMenuItem = (menu) =>
  {
    console.log(">>>>>> menu item click");
    console.log(menu);
    this.setState({menuObject: menu});
  }

  render() {
    
    const {menuItems, isLoading  } = this.props;
    console.log(">>> pringint menu items");
    console.log(menuItems);

    return (
      <div className="container-wrapper">
        <PosHomeLayout menuObject ={this.state.menuObject} onMenuClick = {this.handleOnClickMenuItem}/>
      </div>
    );
  }
}

PosContainer.propTypes={
  menuItems: PropTypes.object,
  isLoading: PropTypes.bool,

}

function mapState(state) {
  return {
    menuItems: state.PosReducer.menuItems,
    isLoading: state.PosReducer.isLoading,
  };
}

function mapDispatch(dispatch) {
  return {
    //actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(PosContainer);
