import React, { Component, PropTypes } from 'react';

class MenuItemComponent extends Component {
    render() {
      
        const { LinkText,
            MenuText,
            MenuColorClass,
            MenuIconClass } = this.props;

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
                    <a href="#">
                        <div className="panel-footer">
                            <span className="pull-left">{LinkText}</span>
                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
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
    
};

export default MenuItemComponent;