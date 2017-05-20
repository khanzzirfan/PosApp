import React, { Component, PropTypes } from 'react';
import MainDetailComponent from 'components/PosMain/MainDetailComponent';
import AppLayout from 'components/common/AppLayout';

class PosHomeLayout extends Component {
    constructor(props) {
        super(props);
        
    }

    /**Update checkout transaction item quantity */
    handleOnTransactionUpdate = (transactionItem) => {
        if(this.props.onTransactionUpdate){
            this.props.onTransactionUpdate(transactionItem);
        }
    }

    /*Add menu item to checkout component */
    handleOnAddItem = (addItem) =>{
        if(this.props.onAddItemClick){
            this.props.onAddItemClick(addItem);
        }
    }

    createMenuObject = (menu) => {
        let menuObject = 
            {
                Name: "FruitSalad",
                Items: [
                    {
                        itemName: "Fruit salad",
                        itemPrice: "10.25",
                    },
                    {
                        itemName: "Cucumber salad",
                        itemPrice: "10.00",
                    },
                    {
                        itemName: "Rose apple salad",
                        itemPrice: "10.00",
                    },
                    {
                        itemName: "Pawpaw salad",
                        itemPrice: "10.00",
                    },
                    {
                        itemName: "Cucumber salad",
                        itemPrice: "10.00",
                    },
                    {
                        itemName: "Rose apple salad",
                        itemPrice: "10.00",
                    },
                    {
                        itemName: "Pawpaw salad",
                        itemPrice: "10.00",
                    },
                ]
            };

        if(menu && menu.Items && menu.Items.length > 0 )
            return menu;

        return menuObject;
    }

    
    render() {
        let navStyleMargin = { marginBottom: '0px' }
        const {menuObject,
            transactions,
            onTransactionUpdate,
            } = this.props;

        let menuItemObject = this.createMenuObject(menuObject);
        console.log(">>> printing pos home layout");
        
        return (
            <div>
                <MainDetailComponent 
                    menuObject={menuItemObject}
                    transactions ={transactions}
                    onTransactionUpdate = {this.handleOnTransactionUpdate}
                    onAddItemClick = {this.handleOnAddItem}/>
            </div>
        );
    }
}


PosHomeLayout.propTypes = {
    menuObject: PropTypes.object,
    transactions: PropTypes.array,
    onTransactionUpdate: PropTypes.func,
    onAddItemClick: PropTypes.func,
};

export default PosHomeLayout;