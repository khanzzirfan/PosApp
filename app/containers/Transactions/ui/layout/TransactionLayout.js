import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppLayout from 'components/common/AppLayout';

class TransactionLayout extends Component {
    constructor(props) {
        super(props);
        
    }

    handleOnToggleClick = () => {
        if(this.props.onToggleSideNavClick)
            this.props.onToggleSideNavClick();
    }

    handleOnMenuClick = () => {
        if(this.props.onMenuClick){
            this.props.onMenuClick();
        }
    }

    render() {
        return (
            <div>
                <AppLayout onMenuClick = {this.handleOnMenuClick} />

            </div>
        );
    }
}

TransactionLayout.propTypes = {
    onMenuClick: PropTypes.func,
    toggleSideNav: PropTypes.bool,
};

export default TransactionLayout;