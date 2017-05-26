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
                        itemName: "Veg salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Veg salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Veg salad",
                        itemPrice: "$10.00",
                    },
                    {
                        itemName: "Veg salad",
                        itemPrice: "$10.00",
                    },
                ]
            };
        return menuObject;
    }

    handleMenuItemClick(e) {
        let menuType = e.target.text;
        let menuObject = menuType =="Fruit salad"? this.createFruitMenuObject():this.createVegeMenuObject();
        this.props.onMenuClick(menuObject);
    }

    render() {
        
        const content = [
            {
                icon: 'table', /*icon class name */
                label: 'Fruit salad',
                to: '#a-link',
                Id:"fruitsalad",
                name:"fuits"
            },
            {
                icon: 'table',
                label: 'Vegetables',
                content: [
                    {
                        icon: 'icon-class-name',
                        label: 'Leafy vegetables',
                        to: '#another-link',
                        Id:"leafyveges",
                        name:"veges"
                    },
                ],
            },
            {
                icon: 'table', /*icon class name */
                label: 'Category',
                to: '#a-link',
                Id:"category",
                name:"Category"
            },
             {
                icon: 'table', /*icon class name */
                label: 'Items',
                to: '#a-link',
                Id:"items",
                name:"items"
            },
            {
                icon: 'table', /*icon class name */
                label: 'Configuration',
                to: '#a-link',
                Id:"configuration",
                name:"Configuration"
            },
        ];
        const {isMobile, toggleSideNav} = this.props;
        console.log(">>> renering mobile version " + isMobile);
        let navBarCollapse = `sidebar-nav navbar-collapse ${isMobile? 'collapse':''}`;
        let navBarOpened = toggleSideNav ? navBarCollapse + " in" : navBarCollapse;
        let ariaExpanded = toggleSideNav ? "true": "false";
        let divStyle = toggleSideNav ? {}: {height:'1px'};

        return (
            <div className="navbar-default sidebar" role="navigation">
                    <div className={navBarOpened} aria-expanded={ariaExpanded} style={divStyle}>
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
                            <MetisMenu content={content} onSelected={(e)=> {this.handleMenuItemClick(e)} } activeLinkFromLocation/>
                        </ul>
                    </div>
                </div>
        );
    }
}

MainSideBarComponent.propTypes = {
    onMenuClick: PropTypes.func,
    isMobile: PropTypes.bool,
    toggleSideNav: PropTypes.bool
};

export default MainSideBarComponent;