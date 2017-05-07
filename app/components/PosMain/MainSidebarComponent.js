import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';

class MainSideBarComponent extends Component {
    render() {

        const content = [
            {
                icon: 'table', /*icon class name */
                label: 'Fruit salad',
                to: '#a-link',
            },
            {
                icon: 'table',
                label: 'Vegetables',
                content: [
                    {
                        icon: 'icon-class-name',
                        label: 'Sub Menu of Second Item',
                        to: '#another-link',
                    },
                ],
            },
        ];


        return (
            <div className="navbar-default sidebar" role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                        </li>
                            <MetisMenu content={content} activeLinkFromLocation/>
                        </ul>
                    </div>
                </div>

        );
    }
}

MainSideBarComponent.propTypes = {

};

export default MainSideBarComponent;