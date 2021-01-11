import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import axios from 'axios';

const ENDPOINT = "http://localhost:4000/";

const socket = socketIOClient(ENDPOINT);

function PopupChat() {

  const [state_style, setStateStyle] = useState({height: "0px"});

  const [input_message, setInputMessage] = useState('');

  const [list_message, setListMessage] = useState([]);

  const [message_server, setMessageServer] = useState('chưa có message');

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
    
  }, []);

  const handleSendMessageToServer = (e) => {
    e.preventDefault();
    socket.emit("MessageFromClient", input_message);
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
                  <div className="item_message" title={item_message.username}>
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