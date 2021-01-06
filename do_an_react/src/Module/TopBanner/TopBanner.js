import LogoBanner from './LogoBanner';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {Button, Checkbox, Typography, Grid, Slider } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
 

import GreenCheckbox from '../../Themes/CustomInput/CheckBoxLike';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';



import {
  Link,
  withRouter
} from 'react-router-dom';

import ItemMenu from './ItemMenu';

import $ from 'jquery';




class TopBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      title_logo: this.props.title_page + ' test xem sao',
      count: 1,
      interval: null,
      search: '',
      thong_tin_user: {
        name: '',
        tai_khoan: '',
        mat_khau: ''
      },
      thong_tin_user_sign_up: {
        name: '',
        tai_khoan: '',
        mat_khau: '',
        nhap_lai_mat_khau: '',
        ngay_sinh: new Date('2014-08-18T21:11:54')
      },
      message_error: {
        general_error: ''
      },
      menu_list: [
        {
          title: 'Trang chủ',
          link: '/'
        },
        {
          title: 'Giới thiệu',
          link: '/gioi-thieu'
        },
        {
          title: 'Chi tiết',
          link: '/chi-tiet'
        },
        {
          title: 'Liên hệ',
          link: '/lien-he'
        }
      ],
      value_volume: 30
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSearchfunction = this.handleSearchfunction.bind(this);
    this.handleChangeInputLoginForm = this.handleChangeInputLoginForm.bind(this);
    this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateCount(){
    this.setState({
      count: this.state.count + 1
    });
  }

  handleChange(event, newValue){
    this.setState({
      value_volume: newValue
    })
  };

  componentDidMount(){

    

    var thong_tin_user_save = localStorage.getItem('thong_tin_user');

    //console.log(JSON.parse(thong_tin_user_save));

    if(typeof thong_tin_user_save != 'undefined' && thong_tin_user_save != null){
      thong_tin_user_save = JSON.parse(thong_tin_user_save);

      if(thong_tin_user_save.tai_khoan){
        this.setState({
          thong_tin_user: thong_tin_user_save
        }, () => {
          console.log(this.state.thong_tin_user);
        })
      }

    }

    // this.setState({
    //   interval: setInterval(() => {
    //     this.updateCount();
    //     //console.log(this.state.title_logo);
    //   }, 1000)
    // })
  }

  componentDidUpdate(){
    // console.log("đang didupdate");
    // if(this.state.count == 3){
    //   this.props.delete_me();
    // }

    console.log(this.props.location.pathname);
  }

  componentWillUnmount(){
    console.log('đang bắt đầu cho component remove');
    clearInterval(this.state.interval);
  }

  handleChangeInput = (e) => {
      //console.log(e.target.value);

      this.setState({
        search: e.target.value
      })
  }

  handleSearchfunction = () => {
    console.log(this.state.search);
  }

  handleChangeInputSignUpForm = (e) => {
    var thong_tin_user_temp = {...this.state.thong_tin_user_sign_up};

    thong_tin_user_temp[e.target.name] = e.target.value;

    this.setState({
      thong_tin_user_sign_up: thong_tin_user_temp
    }, () => {
      //console.log(this.state);
    })
  }

  handleDateChange = (date) => {
    console.log(date);
  }

  handleSubmitSignUpForm = (e) => {
    e.preventDefault();

    console.log('sign up successfull');
  }

  handleChangeInputLoginForm = (e) => {
    var thong_tin_user_temp = {...this.state.thong_tin_user};

    thong_tin_user_temp[e.target.name] = e.target.value;

    this.setState({
      thong_tin_user: thong_tin_user_temp
    }, () => {
      //console.log(this.state);
    })
  }

  handleSubmitLoginForm = (e) => {
    e.preventDefault();

    /* code process call API Express */
    axios.post('http://localhost:4000/user/log-in', this.state.thong_tin_user)
      .then((result) =>  {
        console.log(result);

        var thong_tin_user_temp = {...this.state.thong_tin_user};

        thong_tin_user_temp.name = result.data.data_send.name;

        this.setState({
          thong_tin_user: thong_tin_user_temp
        }, () => {

          //console.log(this.state);

          thong_tin_user_temp.mat_khau = '';

          localStorage.setItem('thong_tin_user', JSON.stringify(thong_tin_user_temp));

          $('#modal-id').hide();
          $('.modal-backdrop').hide();
          $('body').removeClass('modal-open');
          
        });

      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);

        this.setState({
          message_error: {
            general_error: err.response.data.xu_ly
          }
        })

      })



    /* code process call API PHP */
    //console.log(this.state.thong_tin_user);
    // axios.post('http://localhost:8181/test_php/do_an_nho_nho/api/auth/index.php', this.state.thong_tin_user)
    // .then((result) =>  {
    //   console.log(result);

    //   var thong_tin_user_temp = {...this.state.thong_tin_user};

    //   thong_tin_user_temp.name = result.data.data_send.name;

    //   this.setState({
    //     thong_tin_user: thong_tin_user_temp
    //   }, () => {

    //     //console.log(this.state);

    //     thong_tin_user_temp.mat_khau = '';

    //     localStorage.setItem('thong_tin_user', JSON.stringify(thong_tin_user_temp));

    //     $('#modal-id').hide();
    //     $('.modal-backdrop').hide();
    //     $('body').removeClass('modal-open');
        
    //   });

    // })
    // .catch((err) => {
    //   console.log(err);
    //   console.log(err.response);

    //   this.setState({
    //     message_error: {
    //       general_error: err.response.data.xu_ly
    //     }
    //   })

    // })



    // if(this.state.thong_tin_user.tai_khoan == 'hungnguyen' && this.state.thong_tin_user.mat_khau == '123456'){
    //   console.log('Đăng nhập thành công');
    //   var thong_tin_user_temp = {...this.state.thong_tin_user};

    //   thong_tin_user_temp.name = 'Hùng Nguyễn';

    //   this.setState({
    //     thong_tin_user: thong_tin_user_temp
    //   }, () => {

    //     console.log(this.state);

    //     thong_tin_user_temp.mat_khau = '';

    //     localStorage.setItem('thong_tin_user', JSON.stringify(thong_tin_user_temp));

    //     $('#modal-id').hide();
    //     $('.modal-backdrop').hide();
    //     $('body').removeClass('modal-open');
    //   });
    // }
    // else{
    //   this.setState({
    //     message_error: {
    //       general_error: 'Tài khoản hoặc Mật khẩu không chính xác'
    //     }
    //   })
    // }

  }

  render() {
    //console.log(this.state.count);
    return (
      <div className="top-banner">
        <div className="header">
          <div className="container">
            <div className="headr-left">
              <div className="social">
                <a href="#"><i className="facebook"></i></a>
                <a href="#"><i className="twitter"></i></a>
                <a href="#"><i className="gplus"></i></a>
                <a href="#"><i className="pin"></i></a>
                <a href="#"><i className="youtube"></i></a>
              </div>
              <div className="search">
                <form>
                  <input type="button" class="button_submit" onClick={this.handleSearchfunction}  />
                  <input type="text" value={this.state.search} onChange={this.handleChangeInput} defaultValue="" placeholder="Search..." />
                </form>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="headr-right">
              <div className="details">
                <ul>
                  <li><a href="mailto@example.com"><span className="glyphicon glyphicon-envelope"
                        aria-hidden="true"></span>info(at)example.com</a></li>
                  <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+1)000 123 456789
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="banner-info">
          <div className="container">
            <LogoBanner title_logo={this.state.title_logo} />
            <div className="top-menu">
              <span className="menu"></span>
              <ul className="nav1">
                {
                  this.state.menu_list.map((item_menu, index) => 
                    {

                      // var class_active = '';

                      // if(index == 0){
                      //   class_active = 'active';
                      // }

                      // return <li className={class_active}><a href={item_menu.link}>{item_menu.title}</a></li>


                      if(item_menu.link == this.props.location.pathname){
                        return <ItemMenu item_menu={item_menu} index={index} class_name={'active'} />
                      }
                      else{
                        return <ItemMenu item_menu={item_menu} index={index} class_name={''} />
                      }

                      

                    }
                  )
                }
                {
                  (this.state.thong_tin_user.name != '')?
                  <li><a href="">{this.state.thong_tin_user.name}</a></li>
                  :
                  <li>
                    {/* <a href="" class="btn btn-primary" data-toggle="modal" href='#modal-id'>Đăng nhập</a> */}
                    <a href="" data-toggle="modal" href='#modal-id'>
                      <Button variant="contained" color="primary">
                        <PersonIcon />Đăng nhập
                      </Button>
                    </a>

                    <a href="" data-toggle="modal" href='#modal-form-dang-ky'>
                      <Button variant="contained" color="primary">
                        <PersonIcon />Đăng ký
                      </Button>
                    </a>
                  </li>
                }
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>


        <div className="modal fade" id="modal-form-dang-ky">

          <form className="sign_up_form" action="" method="POST" onSubmit={this.handleSubmitSignUpForm}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 className="modal-title">Đăng ký</h4>
                </div>
                <div className="modal-body">
                  <div className="error">
                    {this.state.message_error.general_error}
                  </div>
                  <div>
                    <input type="text" onChange={this.handleChangeInputSignUpForm} placeholder="Tài Khoản" 
                    name="name" id="name" className="form-control" defaultValue="" 
                    value={this.state.thong_tin_user_sign_up.name} />
                  </div>
                  <div>
                    <input type="text" onChange={this.handleChangeInputSignUpForm} placeholder="Tài Khoản" 
                    name="tai_khoan" id="tai_khoan" className="form-control" defaultValue="" 
                    value={this.state.thong_tin_user_sign_up.tai_khoan} />
                  </div>
                  <div>
                    <input type="password" onChange={this.handleChangeInputSignUpForm} placeholder="Mật khẩu" 
                    name="mat_khau" id="mat_khau" className="form-control" defaultValue="" 
                    value={this.state.thong_tin_user_sign_up.mat_khau} />
                  </div>
                  <div>
                    <input type="password" onChange={this.handleChangeInputSignUpForm} placeholder="Mật khẩu" 
                    name="nhap_lai_mat_khau" id="nhap_lai_mat_khau" className="form-control" defaultValue="" 
                    value={this.state.thong_tin_user_sign_up.mat_khau} />
                  </div>
                  <div>
                    <input type="range"  />
                  </div>
                  <Typography id="continuous-slider" gutterBottom>
                    Volume
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <VolumeDown />
                    </Grid>
                    <Grid item xs>
                      <Slider value={this.state.value_volume} 
                      onChange={this.handleChange} 
                      aria-labelledby="continuous-slider"
                      step={10}
                      marks
                      min={10}
                      max={110} />
                    </Grid>
                    <Grid item>
                      <VolumeUp />
                    </Grid>
                  </Grid>
                  <div>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      value={'2017-05-24'}
                      onChange={this.handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                  </div>
                </div>
                <div class="modal-footer">
                  <Button variant="contained" color="default" data-dismiss="modal">
                    <CloseIcon /> Close
                  </Button>
                  <Button variant="contained" color="primary" onClick={this.handleSubmitLoginForm}>
                    <VpnKeyIcon /> Sign Up
                  </Button>
                  {/* <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Login</button> */}
                </div>
              </div>
            </div>
          </form>

        </div>

        
        <div className="modal fade" id="modal-id">

          <form className="login_form" action="" method="POST" onSubmit={this.handleSubmitLoginForm}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 className="modal-title">Đăng Nhập</h4>
                </div>
                <div className="modal-body">
                  <div className="error">
                    {this.state.message_error.general_error}
                  </div>
                  <div>
                    <input type="text" onChange={this.handleChangeInputLoginForm} placeholder="Tài Khoản" 
                    name="tai_khoan" id="tai_khoan" className="form-control" defaultValue="" 
                    value={this.state.thong_tin_user.tai_khoan} />
                  </div>
                  <div>
                    <input type="password" onChange={this.handleChangeInputLoginForm} placeholder="Mật khẩu" 
                    name="mat_khau" id="mat_khau" className="form-control" defaultValue="" 
                    value={this.state.thong_tin_user.mat_khau} />
                  </div>
                  <div>
                    {/* <Checkbox color="primary" /> */}
                    <GreenCheckbox icon={<ThumbUpAltIcon />} checkedIcon={<ThumbUpAltIcon />} />
                  </div>
                </div>
                <div class="modal-footer">
                  <Button variant="contained" color="default" data-dismiss="modal">
                    <CloseIcon /> Close
                  </Button>
                  <Button variant="contained" color="primary" onClick={this.handleSubmitLoginForm}>
                    <VpnKeyIcon /> Login
                  </Button>
                  {/* <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Login</button> */}
                </div>
              </div>
            </div>
          </form>

        </div>
        
      </div>
    );
  }

}

export default withRouter(TopBanner);