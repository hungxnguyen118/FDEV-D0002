import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import axios from 'axios';

import $ from 'jquery';

const ENDPOINT = "http://localhost:4000/";

const socket = socketIOClient(ENDPOINT);

function PopupChat() {

  const [state_style, setStateStyle] = useState({height: "0px"});

  const [input_message, setInputMessage] = useState('');

  const [list_message, setListMessage] = useState([]);

  const [message_server, setMessageServer] = useState('chưa có message');

  const [current_username, setCurrentUsername] = useState('');

  

  useEffect(() => {

    

    axios.get('http://localhost:4000/messages')
      .then((results) => {

        console.log(results.data.data_send);

        setListMessage(results.data.data_send);

      })
      .catch((err) => {
        console.log(err);
      })

      socket.on('MessageFromServer', (data) => {
        console.log(data);
        //setMessageServer(data);
        setListMessage(list_message => [...list_message, data]);
      });


      var thong_tin_user_save = localStorage.getItem('thong_tin_user');

      if(typeof thong_tin_user_save != 'undefined' && thong_tin_user_save != null){
        //console.log(thong_tin_user_save);
        var user_temp = JSON.parse(thong_tin_user_save);
        if(user_temp.tai_khoan){
          setCurrentUsername(user_temp.tai_khoan);

          socket.emit('joinRoom', 'room1');
        }
      }
    
  }, []);

  useEffect(() => {
    //console.log(document.getElementsByClassName('danh_sach_chat')[0])
    //window.scrollTo(document.height);
    document.getElementsByClassName('danh_sach_chat')[0].scrollTop = document.getElementsByClassName('danh_sach_chat')[0].scrollHeight;
    //$('.danh_sach_chat').animate({scrollTo: $('.danh_sach_chat').height()});
  }, [list_message])

  const handleSendMessageToServer = (e) => {
    e.preventDefault();

    var thong_tin_user_save = localStorage.getItem('thong_tin_user');

    if(typeof thong_tin_user_save != 'undefined' && thong_tin_user_save != null){
      //console.log(thong_tin_user_save);
      var user_temp = JSON.parse(thong_tin_user_save);
      if(user_temp.tai_khoan){
        var data_message_save = { 
          "username" : user_temp.tai_khoan, 
          "timestamp" : Date.now(), 
          "message" : input_message, 
          "room" : "room1"
        }
        socket.emit("MessageFromClient", data_message_save);

        setInputMessage('');
      }
      else{
        //alert('Bạn vui lòng đăng nhập để chat');

        var data_message_save = { 
          "username" : "anonymous", 
          "timestamp" : Date.now(), 
          "message" : input_message, 
          "room" : ""
        }
        socket.emit("MessageFromClient", data_message_save);

      }
    }
    else{
      //console.log(456);
      //alert('Bạn vui lòng đăng nhập để chat');

      var data_message_save = { 
        "username" : "anonymous", 
        "timestamp" : Date.now(), 
        "message" : input_message, 
        "room" : ""
      }
      socket.emit("MessageFromClient", data_message_save);

    }
    //setListMessage(list_message => [...list_message, input_message]);
  }

  const handleChangeInput = (e) => {
    setInputMessage(e.target.value);
  }

  const handleShowHidePopupChat = (e) => {

    // console.log(state_style.height);
    // if(state_style.height == "0px"){
    //   setStateStyle({
    //     height: "358px"
    //   })
    // }
    // else{
    //   setStateStyle({
    //     height: "0px"
    //   })
    // }

  }


  return (
    <div className="div_include_chat_box">

        <div className="title_chat_form" onClick={handleShowHidePopupChat}>
            Liên hệ chúng tôi
        </div>
  
        <div className="detect_an_hien">
          <div className="danh_sach_chat">
            {
              list_message.map( item_message => {
                return (
                  <div className={'item_message' 
                  + ((item_message.username == current_username)?' current_user':'')} 
                  title={item_message.username}>
                    {item_message.message}
                  </div>
                )
              })
            }
          </div>

          <div>
              
              <form onSubmit={handleSendMessageToServer}>
                  <input className="input_message" onChange={handleChangeInput} type="text" name="message" value={input_message} />
                  <button className="button_send_message" type="submit">
                    <img src="/images/send_message.png"  alt="" />
                  </button>
              </form>
              
          </div>
        </div>

    </div>
  );
}

export default PopupChat;