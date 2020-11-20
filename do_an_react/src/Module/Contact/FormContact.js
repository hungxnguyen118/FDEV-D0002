import React, { Component } from 'react';

class FormContact extends Component {

    constructor (props){
        super(props);
        this.state = {
            ho_ten: '',
            so_dien_thoai: '',
            email: '',
            noi_dung: ''
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeInput = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form className="form-horizontal">
                            
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="text" name="ho_ten" onChange={this.handleChangeInput} value={this.state.ho_ten} className="form-control" placeholder={"Họ tên"} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="text" name="so_dien_thoai" onChange={this.handleChangeInput} value={this.state.so_dien_thoai} className="form-control" placeholder={"Số điện thoại"} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="email" name="email" onChange={this.handleChangeInput} value={this.state.email} className="form-control" placeholder={"Email"} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-12">
                        <textarea name="noi_dung" onChange={this.handleChangeInput} value={this.state.noi_dung} className="form-control" placeholder={"Muốn nói gì"} ></textarea>
                    </div>
                </div>
        
                <div className="form-group">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">Gửi thông tin liên hệ</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default FormContact;