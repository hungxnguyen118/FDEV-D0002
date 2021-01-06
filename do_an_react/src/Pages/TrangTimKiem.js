import React, { Component } from 'react';
import Slider from '../Module/Slider/Slider';
import axios from 'axios';

class TrangTimKiem extends Component {

    constructor(props){
        super(props);
        this.state = {
            thoi_luong: 0,
            ds_phim: []
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleSubmitFormTimKiem = (e) => {
        e.preventDefault();

        //console.log(this.state.thoi_luong);
        var query = '';
        if(this.state.thoi_luong){
            query += '?thoi_luong=' + this.state.thoi_luong;
        }

        axios.get('http://localhost:4000/movies' + query)
            .then((result) => {
                //console.log(result);
                this.setState({
                    ds_phim: result.data.data_send
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleChangeInput = (e) => {
        //console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <>
                <Slider />

                <form onSubmit={this.handleSubmitFormTimKiem} role="form">
                    <legend>Lọc phim</legend>
                
                    <div class="form-group">
                        <label for="">Thời Lượng lớn hơn:</label>
                        <input type="text" onChange={this.handleChangeInput} name="thoi_luong" class="form-control" id="" placeholder="Thời Lượng Phim" />
                    </div>
                                
                    <button type="submit" class="btn btn-primary">Lọc Phim</button>
                </form>

                <div>
                    {
                        this.state.ds_phim.map(phim => {
                            return (
                                <>
                                    <div>{phim.ten_phim}</div>
                                    <div>{phim.thoi_luong}</div>
                                </>
                            );
                        })
                    }
                </div>
                
            </>
        );
    }
}

export default TrangTimKiem;