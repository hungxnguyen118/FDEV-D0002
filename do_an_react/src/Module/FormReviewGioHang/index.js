import React, { Component } from 'react';
import ItemGioHang from './ItemGioHang';
import { Redirect } from 'react-router-dom';

class FormReviewGioHang extends Component {

    constructor(props){
        super(props);
        this.state = {
            mang_gio_hang: []
        };

        
        this.ProcessRedirect = this.ProcessRedirect.bind(this);
        
    }

    componentDidMount(){
        var string_mang_gio_hang = localStorage.getItem('gio_hang');
        //console.log(string_mang_gio_hang);

        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            console.log(JSON.parse(string_mang_gio_hang));
            this.setState({
                mang_gio_hang: JSON.parse(string_mang_gio_hang)
            });
        }

    }


    ProcessRedirect(){
        var string_mang_gio_hang = localStorage.getItem('gio_hang');
        if(typeof string_mang_gio_hang != 'undefined' && string_mang_gio_hang != null){
            if(JSON.parse(string_mang_gio_hang).length > 0){
                return <></>
            }
            else{
                return <Redirect to="/" />;
            }
        }
        else{
            return <Redirect to="/" />;
        }
    }

    render() {
        return (
            <div>
                {
                   this.ProcessRedirect() 
                }
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    tên sản phẩm
                                </th>
                                <th>
                                    số lượng
                                </th>
                                <th>
                                    đơn giá
                                </th>
                                <th>
                                    thành tiền
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.mang_gio_hang.map(item_gio_hang => 
                                <ItemGioHang info_item={item_gio_hang} handle_remove_item={this.handleRemoveItemCart} handle_process={this.handleChangeSoLuongGioHang} />    
                            )}
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default FormReviewGioHang;