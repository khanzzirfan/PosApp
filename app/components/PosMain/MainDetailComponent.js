import React, { Component, PropTypes } from 'react';
import MainCheckoutComponent from 'components/PosMain/MainCheckoutComponent';
import MenuItemComponent from 'components/PosMain/MenuItems/MenuItemComponent';
class MainDetailComponent extends Component {
    constructor(props){
        super(props);

        //this.handleOnAddItem = this.handleOnAddItem.bind(this);
    }
    /**on adding menu item to checkout cart */
    handleOnAddItem = (addItem) =>{
        if(this.props.onAddItemClick){
            this.props.onAddItemClick(addItem);
        }
    }

    /**Update checkout transaction item quantity */
    handleOnTransactionUpdate = (transactionItem) => {
        if(this.props.onTransactionUpdate){
            this.props.onTransactionUpdate(transactionItem);
        }
    }

    createGroupedArray(arr, chunkSize) {
        var groups = [], i;
        for (i = 0; i < arr.length; i += chunkSize) {
            groups.push(arr.slice(i, i + chunkSize));
        }
        return groups;
    }

    /**constructs a menu item */
    createMenuComponent(item, index) {
        return (
            <div key={index} className="col-lg-3 col-md-4">
                <MenuItemComponent LinkText="Add"
                    MenuText={item.itemName}
                    MenuIconClass="fa fa-compass fa-1x"
                    MenuColorClass="panel-primary"
                    MenuPrice={item.itemPrice}
                    onAddItemClick ={this.handleOnAddItem}/>
            </div>
        );
    }

    /**Show menu items on the detail page */
    createMenuDetailComponent(menuObject) {
        let menuArrayObject = this.createGroupedArray(menuObject.Items, 4);
        let menuDetailReactElement  = menuArrayObject.map((itemSubArray, index) => {
            return (
                <div key = {`menuItemKey${index}`} className="row">
                    {itemSubArray.map( (item, index) => {
                        return this.createMenuComponent(item, index);
                    })}
                </div>
            )    
        });
        return menuDetailReactElement;
    }

    render() {
        const { menuObject, transactions, onTransactionUpdate } = this.props;
        let createMenuDetailComponent = this.createMenuDetailComponent(menuObject);

        return (
            <div id="page-wrapper">
                <div className="row row-inverse">
                    <div className="col-lg-8 col-md-8">
                        <div className="row row-inverse row-cols-padding">
                            {createMenuDetailComponent}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <MainCheckoutComponent transactions ={transactions}
                            onTransactionUpdate = {this.handleOnTransactionUpdate}/>
                    </div>
                </div>
            </div>
        );
    }
}

MainDetailComponent.propTypes = {
    menuObject: PropTypes.object,
    transactions: PropTypes.array,
    onTransactionUpdate: PropTypes.func,
    onAddItemClick: PropTypes.func,
};

export default MainDetailComponent;