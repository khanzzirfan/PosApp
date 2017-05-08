import React, { Component, PropTypes  } from 'react';

class CustomLinkComponent extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.hasSubMenu) this.props.toggleSubMenu(e);
        else {
            console.log(">>> e is  ");
            console.log(e);
            this.props.onMenuClick(e);
            //   this.props.activateMe({
            //     newLocation: this.props.to,
            //     selectedMenuLabel: this.props.label,
            //   });
        }
    }

    render() {
        return (
            <button className="metismenu-link" onClick={this.onClick}>
                {this.props.children}
            </button>
        );
    }

}

CustomLinkComponent.prototype = {
    onMenuClick: PropTypes.func,
}