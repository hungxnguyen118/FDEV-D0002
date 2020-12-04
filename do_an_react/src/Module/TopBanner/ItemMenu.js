import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class ItemMenu extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <li key={this.props.index} className={this.props.class_name}>
                <Link to={this.props.item_menu.link}>{this.props.item_menu.title}</Link>
            </li>
        );
    }
}

export default ItemMenu;