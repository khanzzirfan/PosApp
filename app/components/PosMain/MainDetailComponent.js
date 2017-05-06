import React, { Component, PropTypes } from 'react';
import MainCheckoutComponent from 'components/PosMain/MainCheckoutComponent';
import MenuItemComponent from 'components/PosMain/MenuItems/MenuItemComponent';
class MainDetailComponent extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <MenuItemComponent LinkText="View"
                                    MenuText="Fruit salad"
                                    MenuIconClass="fa fa-compass fa-5x"
                                    MenuColorClass="panel-primary"/>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <MenuItemComponent LinkText="View"
                                    MenuText="Tomato salad"
                                    MenuIconClass="fa fa-compass fa-5x"
                                    MenuColorClass="panel-primary"/>

                            </div>
                            <div className="col-lg-4 col-md-6">
                                <MenuItemComponent LinkText="View"
                                    MenuText="Cucumber salad"
                                    MenuIconClass="fa fa-compass fa-5x"
                                    MenuColorClass="panel-primary"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <MenuItemComponent LinkText="View"
                                    MenuText="Fruit salad"
                                    MenuIconClass="fa fa-compass fa-5x"
                                    MenuColorClass="panel-primary"/>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <MenuItemComponent LinkText="View"
                                    MenuText="Tomato salad"
                                    MenuIconClass="fa fa-compass fa-5x"
                                    MenuColorClass="panel-primary"/>

                            </div>
                            <div className="col-lg-4 col-md-6">
                                <MenuItemComponent LinkText="View"
                                    MenuText="Cucumber salad"
                                    MenuIconClass="fa fa-compass fa-5x"
                                    MenuColorClass="panel-primary"/>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="col-lg-4 col-md-6">
                        <MainCheckoutComponent />
                    </div>
                </div>
            </div>
        );
    }
}

MainDetailComponent.propTypes = {

};

export default MainDetailComponent;