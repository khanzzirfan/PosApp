import React, { Component, PropTypes } from 'react';

class CheckoutCartItemComponent extends Component {
    constructor(props, context) {
        super(props, context);

        //local state for each transaction item;
        this.state = {
            transactionId: 0,
            itemQuantity: 0,
            itemName: '',
            itemPrice: 0.00,
        }

    }

    onAddMenuItem = (transactionId) => {
        console.log(">>> adding item and priting state ");
        console.log(this.state);

        let itemQuantity = this.state.itemQuantity + 1;
        this.setState({
            itemQuantity: itemQuantity
        });

        //update the reducer store;
        this.updateTransaction(itemQuantity);
    }

    onRemoveMenuItem = (transactionId) => {
        console.log(">>> removing item and priting state ");
        console.log(this.state);

        let itemQuantity = this.state.itemQuantity - 1;
        this.setState({
            itemQuantity: itemQuantity
        });
    }

    updateTransaction = (itemQuantity) => {
        let transactionItem = {
            transactionId: this.state.transactionId,
            menuPrice: this.state.itemPrice,
            quantity: itemQuantity,
            menuName: this.state.itemName
        }

        this.props.onTransactionUpdate(transactionItem);
    }

    componentDidMount() {
        let transactionId = this.props.transactionId;
        let itemPrice = this.props.itemPrice;
        let itemQuantity = this.props.itemQuantity;
        let itemName = this.props.itemName;

        this.setState({
            transactionId: transactionId,
            itemPrice: itemPrice,
            itemQuantity: itemQuantity,
            itemName: itemName
        });
    }

    componentWillReceiveProps(nextProps) {
        let transactionId = nextProps.transactionId;
        let itemPrice = nextProps.itemPrice;
        let itemQuantity = nextProps.itemQuantity;
        let itemName = nextProps.itemName;

        this.setState({
            transactionId: transactionId,
            itemPrice: itemPrice,
            itemQuantity: itemQuantity,
            itemName: itemName
        });
    }

    render() {
        const {
            itemName,
            itemQuantity,
            itemPrice,
            transactionId,
            onTransactionUpdate
        } = this.props;

        let formattedName = `${transactionId}. ${itemName}`;
        let price = `$${this.state.itemPrice}`;
        let totalAmount = `$${this.state.itemPrice * this.state.itemQuantity}.00`;

        let itemQuantityrowSeperate = { marginTop: "6px" };
        let itemNamePaddingLeft = { paddingLeft: "0px" };

        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-lg-5 text-left">
                        <span>{transactionId}.{itemName}</span>
                    </div>
                    <div className="col-lg-4">
                        <button type="button" className="btn btn-xs" onClick={this.onAddMenuItem}>
                            <span className="fa fa-plus-square fa-1x"></span>
                        </button>
                        <span> x {this.state.itemQuantity} </span>
                        <button type="button" className="btn btn-xs" onClick={this.onRemoveMenuItem}>
                            <span className="fa fa-minus-square fa-1x"></span>
                        </button>
                    </div>
                    <div className="col-lg-3 text-right">
                        <span>{totalAmount}</span>
                    </div>
                </div>
            </div>

        );
    }
}

CheckoutCartItemComponent.propTypes = {
    itemName: PropTypes.string,
    itemQuantity: PropTypes.number,
    itemPrice: PropTypes.number,
    transactionId: PropTypes.number,
    onTransactionUpdate: PropTypes.func,
}

export default CheckoutCartItemComponent 