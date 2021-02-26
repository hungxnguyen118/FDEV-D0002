import React, { Component } from 'react';

class ItemGioHang extends Component {
    constructor(props){
        super(props);

        this.state = {
            is_edit: false
        };
    }

    
    render() {
        return (
            <>
            {
                (this.props.info_item)?
                <tr>
                    <td>{this.props.info_item.ma}</td>
                    <td>{this.props.info_item.ten_san_pham + this.props.info_item.so_luot_xem}</td>
                    <td className="include_action_gio_hang">
                        {this.props.info_item.so_luong}
                    </td>
                    <td>{this.props.info_item.don_gia}</td>
                    <td>{this.props.info_item.don_gia * this.props.info_item.so_luong}</td>
                </tr>
                :
                <></>
            }
            </>
        );
    }
}

export default ItemGioHang;