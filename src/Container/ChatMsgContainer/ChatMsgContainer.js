import React, {Component} from 'react';
import ChatMsgComponent from '../../Component/ChatMsgComponent/ChatMsgComponent.js';

class ChatMsgContainer extends Component {

  render() {
    return (
      <ChatMsgComponent __activeChatId={this.props._activeChatId} __chatMessages={this.props._chatMessages} />
    )
  }
}


export default ChatMsgContainer;
