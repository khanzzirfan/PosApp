import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppLayout from 'components/common/AppLayout';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth, /**decide mobile width */
            toggleSideNav: false,
        };
        //setup bindings;
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
        this.setState({ toggleSideNav: !this.state.toggleSideNav });
    }

    handleOnClickMenuItem = (menu) => {
        console.log(">>>>>> menu item click");
        console.log(menu);
        this.setState({ menuObject: menu });
    }

    render() {
        const { width, toggleSideNav } = this.state;
        const isMobile = width <= 768;

        return (
            <div>
                <AppLayout onMenuClick={this.handleOnClickMenuItem} 
                    isMobile={isMobile} 
                    toggleSideNav = {toggleSideNav} 
                    onToggleSideNavClick= {this.handleOnToggleSideNavClick} />
            </div>
        );
    }
}

AppContainer.propTypes = {

};

export default AppContainer;