import React, { Component } from 'react';
import ItemGioHang from './ItemGioHang';
import { Redirect } from 'react-router-dom';

class FormGioHang extends Component {

    constructor(props){
        super(props);
        this.state = {
            mang_gio_hang: []
        };

        this.handleChangeSoLuongGioHang = this.handleChangeSoLuongGioHang.bind(this);
        this.handleRemoveItemCart = this.handleRemoveItemCart.bind(this);
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

    handleChangeSoLuongGioHang(id_san_pham, gia_tri){
        console.log('run');
        var temp_array = this.state.mang_gio_hang;
        for(var i = 0; i < temp_array.length; i++){
            if(id_san_pham == temp_array[i].ma){
                temp_array[i].so_luong = gia_tri;
                this.setState({
                    mang_gio_hang: temp_array
                });
                localStorage.setItem('gio_hang', JSON.stringify(temp_array));
                break;
            }
        }
    }

    handleRemoveItemCart(id_san_pham){
        var temp_array = this.state.mang_gio_hang;
        for(var i = 0; i < temp_array.length; i++){
            if(id_san_pham == temp_array[i].ma){
                temp_array.splice(i, 1);
                this.setState({
                    mang_gio_hang: temp_array
                });
                localStorage.setItem('gio_hang', JSON.stringify(temp_array));
                break;
            }
        }
        //console.log(temp_array);
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
                                <th>
                                    Thao Tác
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

export default FormGioHang;