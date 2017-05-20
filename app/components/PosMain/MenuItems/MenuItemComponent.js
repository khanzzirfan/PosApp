import React, { Component, PropTypes } from 'react';

class MenuItemComponent extends Component {
    constructor(props, context){
        super(props, context);

    }

    handleOnAddItem = () =>{
        if(this.props.onAddItemClick){
            let addItem = {
                menuName: this.props.MenuText,
                menuPrice: parseFloat(this.props.MenuPrice),
                quantity: 1,
                transactionId: 0
            }
            this.props.onAddItemClick(addItem);
        }
    }

    render() {
      
        const { LinkText,
            MenuText,
            MenuColorClass,
            MenuIconClass,
            MenuPrice } = this.props;

        let navStyleMargin = { marginBottom: '0px' }
        let panelClass = `panel ${MenuColorClass}`;
        return (
            <div>
                <div className={panelClass}>
                    <div className="panel-heading">
                        <div className="text-center">{MenuText}</div>
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <i className={MenuIconClass}></i>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0);" onClick={this.handleOnAddItem}>
                        <div className="panel-footer">
                            <span className="pull-left">{LinkText}</span>
                            <span className="pull-right"><i><em>${MenuPrice}</em></i></span>
                            <div className="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

MenuItemComponent.propTypes = {
    LinkText: PropTypes.string,
    MenuText: PropTypes.string,
    MenuColorClass: PropTypes.string,
    MenuIconClass: PropTypes.string,
    MenuPrice: PropTypes.string,
    onAddItemClick: PropTypes.func
    
};

export default MenuItemComponent;