import LogoBanner from './LogoBanner';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TopBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      title_logo: this.props.title_page + ' test xem sao',
      count: 1,
      interval: null,
      search: ''
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSearchfunction = this.handleSearchfunction.bind(this);
  }

  updateCount(){
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount(){
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
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">{this.state.count}</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="typo.html">News</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Mail</a></li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    );
  }

}

export default TopBanner;