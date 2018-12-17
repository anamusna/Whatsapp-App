import React, {Component} from 'react';
import MessageInputComponent from './MessageInputComponent.js'
import ChatPanelComponent from './ChatPannelComponent/ChatPanelComponent.js'

import commonStyle from '../../common.css';

class ChatMsgComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      "inputChatMessage": "",
      "one_on_one_messages": this.props.__chatMessages
    }

    this._mapped_messaages = {};
    this.activeChatId = this.props.__activeChatId;
    this.activeChatMessages = this.state.one_on_one_messages["chatMessages"]

    this.chatMessageHashMap = (userConversation) => {

      this._mapped_messaages = userConversation.reduce( function(map, obj,currentIndex){
          map[obj.commentId] = currentIndex
          return map;
      }, {} )
    }

    this.chatMessageHashMap(this.state["one_on_one_messages"]["chatMessages"]);

    //when you use arrow function, below binding is not required!!
    // this.changeInputChatMessage = this.changeInputChatMessage.bind(this)
  }


  _appendMessage = (e) => {
      if(e.key === "Enter" && this.state.inputChatMessage.length){

        // this.setState({one_on_one_messaages: this.state.one_on_one_messaages.concat([
        //
        //   {
        //     "time": "10:07 AM",
        //     "description": "??",
        //     "user": 0
        //   }
        //
        // ]) })

        var message = {
          "time": "10:05 AM",
          "description": this.state.inputChatMessage,
          "commentId":this.state.one_on_one_messages["chatMessages"].length*2,
          "user": 0
        }

        let activeChat = Object.assign({}, this.state.one_on_one_messages);
        activeChat["chatMessages"].push(message);

        this.setState(
            {one_on_one_messages: activeChat, inputChatMessage: ""},
            function(){
              this.chatMessageHashMap(this.state["one_on_one_messages"]["chatMessages"])
              var scrollToElement = document.getElementById("chatMessages");
              scrollToElement.scrollTo(1, scrollToElement.scrollHeight);
            })
      }
  }

  _deleteChat = (e) => {

    const targetId = e.currentTarget.parentNode.parentNode.getAttribute('id'),
          index = this._mapped_messaages[Number(targetId)];
          console.log(this);
    let activeChat = this.state.one_on_one_messages["chatMessages"];

    if(index > -1){

      let filteredChat = activeChat.filter(function(message, elementPosition){

        if(elementPosition !== index){
          return message
        }
      });

      let chats = Object.assign({}, this.state.one_on_one_messages)
          chats["chatMessages"] = filteredChat;

      this.setState(
        { one_on_one_messages: chats },
        function(){
          this.chatMessageHashMap(activeChat)
        }
      )

    }
  }

  _changeInputChatMessage = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.__activeChatId !==this.props.__activeChatId){
      this.setState({
        "one_on_one_messages": nextProps.__chatMessages
      })
    }
  }

  render() {
    return (
      <div className={commonStyle.fullHeight}>
        <ChatPanelComponent
        deleteChat={this._deleteChat}
        messageList={this.state.one_on_one_messages["chatMessages"]} />
        <MessageInputComponent
        appendMessage = {this._appendMessage}
        changeInputChatMessage = {this._changeInputChatMessage}
        inputChatMessage={this.state.inputChatMessage} />
      </div>
    )
  }
}


export default ChatMsgComponent;
