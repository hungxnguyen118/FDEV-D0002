import LogoBanner from './LogoBanner';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
      message_error: {
        general_error: ''
      },
      menu_list: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'About',
          link: '/about'
        },
        {
          title: 'Reviews',
          link: '/reviews'
        },
        {
          title: 'New',
          link: '/new'
        },
        {
          title: 'Gallery',
          link: '/gallery'
        },
        {
          title: 'Contact',
          link: '/contact'
        },
      ]
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSearchfunction = this.handleSearchfunction.bind(this);
    this.handleChangeInputLoginForm = this.handleChangeInputLoginForm.bind(this);
    this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
  }

  updateCount(){
    this.setState({
      count: this.state.count + 1
    });
  }

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

    if(this.state.thong_tin_user.tai_khoan == 'hungnguyen' && this.state.thong_tin_user.mat_khau == '123456'){
      console.log('Đăng nhập thành công');
      var thong_tin_user_temp = {...this.state.thong_tin_user};

      thong_tin_user_temp.name = 'Hùng Nguyễn';

      this.setState({
        thong_tin_user: thong_tin_user_temp
      }, () => {

        console.log(this.state);

        thong_tin_user_temp.mat_khau = '';

        localStorage.setItem('thong_tin_user', JSON.stringify(thong_tin_user_temp));

        $('#modal-id').hide();
        $('.modal-backdrop').hide();
        $('body').removeClass('modal-open');
      });
    }
    else{
      this.setState({
        message_error: {
          general_error: 'Tài khoản hoặc Mật khẩu không chính xác'
        }
      })
    }
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


                      if(index == 0){
                        return <li key={index} className="active"><a href={item_menu.link}>{item_menu.title}</a></li>
                      }
                      else{
                        return <li key={index} className=""><a href={item_menu.link}>{item_menu.title}</a></li>
                      }

                      

                    }
                  )
                }
                {
                  (this.state.thong_tin_user.name != '')?
                  <li><a href="">{this.state.thong_tin_user.name}</a></li>
                  :
                  <li><a href="" class="btn btn-primary" data-toggle="modal" href='#modal-id'>Đăng nhập</a></li>
                }
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
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
                </div>
                <div class="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </form>

        </div>
        
      </div>
    );
  }

}

export default TopBanner;