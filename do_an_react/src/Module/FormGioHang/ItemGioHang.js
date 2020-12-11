import React, { Component } from 'react';
import {Button, ButtonGroup} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

class ItemGioHang extends Component {
    constructor(props){
        super(props);

        this.state = {
            is_edit: false
        };

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleButtonRemoveItemCart = this.handleButtonRemoveItemCart.bind(this);
        this.handleAllowEditOrNot = this.handleAllowEditOrNot.bind(this);
    }

    handleButtonClick(string_loai){
        if(string_loai == '-'){
            if(this.props.info_item.so_luong - 1 > 0){
                this.props.handle_process(this.props.info_item.id, this.props.info_item.so_luong - 1);
            }
            else{
                this.props.handle_process(this.props.info_item.id, 1);
                var key = window.confirm('Bạn có muốn xóa sản phẩm ' + this.props.info_item.title + ' khỏi giỏ hàng không?');
                //console.log(key);
                if(key == true){
                    this.props.handle_remove_item(this.props.info_item.id);
                }
            }
        }
        else{
            this.props.handle_process(this.props.info_item.id, this.props.info_item.so_luong + 1);
        }
    }

    handleButtonRemoveItemCart(){
        var key = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm ' + this.props.info_item.title + ' khỏi giỏ hàng không?');
        //console.log(key);
        if(key == true){
            this.props.handle_remove_item(this.props.info_item.id);
        }
    }

    handleAllowEditOrNot(){
        this.setState({
            is_edit: !this.state.is_edit
        });
    }

    render() {
        return (
            <>
            {
                (this.props.info_item)?
                <tr>
                    <td>{this.props.info_item.id}</td>
                    <td>{this.props.info_item.title + this.props.info_item.type}</td>
                    <td className="include_action_gio_hang">
                        <button type="button" class="btn btn-default" onClick={()=>{this.handleButtonClick('-')}}>-</button>
                        <input type="number" name="" readOnly={!this.state.is_edit} className="form-control number_input" value={this.props.info_item.so_luong} />
                        <button type="button" class="btn btn-default" onClick={()=>{this.handleButtonClick('+')}}>+</button>
                    </td>
                    <td>{this.props.info_item.price}</td>
                    <td>{this.props.info_item.price * this.props.info_item.so_luong}</td>
                    <td>
                        <ButtonGroup aria-label="contained primary button group">
                            <Button variant="contained" style={{background: '#009900'}} size="small" color="primary" onClick={this.handleAllowEditOrNot}>
                                <EditOutlinedIcon />
                            </Button>
                            <Button variant="contained" size="small" color="secondary" onClick={this.handleButtonRemoveItemCart}>
                                <DeleteIcon/>
                            </Button>
                        </ButtonGroup>
                    </td>
                </tr>
                :
                <></>
            }
            </>
        );
    }
}

export default ItemGioHang;