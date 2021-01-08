import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import axios from 'axios';

const ENDPOINT = "http://localhost:4000/";

function PopupChat() {
  const [list_message, setListMessage] = useState([]);

  const [state_show_or_hide, setStateShowOrHide] = useState(0);
  const [state_style, setStateStyle] = useState({height: "0px"});

  const [input_message, setInputMessage] = useState('');

  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {

    axios.get('/danh-sach-chat')
      .then((results) => {

        console.log(results);

        setListMessage(results.data);

      })
      .catch((err) => {
        console.log(err);
      })


    socket.on("MessageServer", data => {
        console.log(data);
        
        setListMessage(list_message => [...list_message, data]);
    });
    
  }, []);

  const handleSendMessageToServer = (e) => {
    e.preventDefault();
    socket.emit("MessageClient", input_message);
  }

  const handleChangeInput = (e) => {
    setInputMessage(e.target.value);
  }

  const handleShowHidePopupChat = (e) => {
    // if(state_show_or_hide == 0){
    //   setStateShowOrHide(1);
    // }
    // else{
    //   setStateShowOrHide(0);
    // }

    //setStateShowOrHide(!state_show_or_hide);
    //setStateShowOrHide(1 - state_show_or_hide);

    console.log(state_style.height);
    if(state_style.height == "0px"){
      setStateStyle({
        height: "358px"
      })
    }
    else{
      setStateStyle({
        height: "0px"
      })
    }

  }


  return (
    <div className="div_include_chat_box">

        {/* {
          (state_show_or_hide == false)?
            <div className="title_chat_form" onClick={handleShowHidePopupChat}>
              Liên hệ chúng tôi
            </div>
          :
            <div>
                <div className="title_chat_form" onClick={handleShowHidePopupChat}>
                  Liên hệ chúng tôi
                </div>
        
                <div className="detect_an_hien">
                  <div className="danh_sach_chat">
                      {list_message.map((item_chat, index) => (
                          <div key={index} className="item_chat">
                              {item_chat.noi_dung}
                          </div>
                      ))}
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
        } */}

        <div className="title_chat_form" onClick={handleShowHidePopupChat}>
            Liên hệ chúng tôi
        </div>
  
        <div className="detect_an_hien" style={state_style}>
          <div className="danh_sach_chat">
              {list_message.map((item_chat, index) => (
                  <div key={index} className="item_chat">
                      {item_chat.noi_dung}
                  </div>
              ))}
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