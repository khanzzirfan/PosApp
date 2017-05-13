import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import MetisMenu from 'react-metismenu';
import CustomLinkComponent from 'components/PosMain/Custom/CustomLinkComponent';

class MainSideBarComponent extends Component {
    constructor(){
        super();
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }

    createFruitMenuObject = () => {
        let menuObject = 
            {
                Name: "FruitSalad",
                Items: [
                    {
                        itemName: "Fruit salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Cucumber salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Rose apple salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Pawpaw salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Cucumber salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Rose apple salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Pawpaw salad",
                        itemPrice: "$10.00",
                    },
                ]
            };
        return menuObject;
    }

    createVegeMenuObject = () => {
        let menuObject = 
            {
                Name: "VegeSalad",
                Items: [
                    {
                        itemName: "Vege salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Vege salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Veg salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Pawpaw salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Cucumber salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Rose apple salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Pawpaw salad",
                        itemPrice: "$10.00",
                    },
                ]
            };
        return menuObject;
    }

    handleMenuItemClick(menuType) {
        let menuObject = menuType =="fruits"? this.createFruitMenuObject():this.createVegeMenuObject();
        this.props.onMenuClick(menuObject);
    }

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
                            <MetisMenu content={content} LinkComponent={CustomLinkComponent} activeLinkFromLocation/>
                        </ul>
                    </div>
                </div>
        );
    }
}

MainSideBarComponent.propTypes = {
    onMenuClick: PropTypes.func,
};

export default MainSideBarComponent;