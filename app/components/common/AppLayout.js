import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainHeaderComponent from 'components/PosMain/MainHeaderComponent';
import MainSideBarComponent from 'components/PosMain/MainSideBarComponent';


class AppLayout extends Component {
    constructor(props) {
        super(props);

    }

    handleOnToggleClick = () => {
        if (this.props.onToggleSideNavClick) {
            this.props.onToggleSideNavClick();
        }
    }

    handleOnMenuClick = () => {
        if (this.props.onMenuClick) {
            this.props.onMenuClick();
        }
    }

    render() {

        let navStyleMargin = { marginBottom: '0px' }
        const { isMobile, toggleSideNav } = this.props;

        return (
            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={navStyleMargin}>
                <div className="navbar-header">
                    <button type="button" onClick={this.handleOnToggleClick}
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">Pos v2.0</a>
                </div>
                <MainHeaderComponent />
                <MainSideBarComponent onMenuClick={this.handleOnMenuClick}
                    isMobile={isMobile} 
                    toggleSideNav = {toggleSideNav} />
            </nav>
        );
    }
}

AppLayout.propTypes = {
    onToggleSideNavClick: PropTypes.func,
    onMenuClick: PropTypes.func,
    isMobile: PropTypes.bool,
    toggleSideNav: PropTypes.bool,
};

export default AppLayout;