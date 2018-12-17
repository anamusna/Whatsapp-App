import React, {Component} from 'react';
import ChatListComponent from '../../Component/ChatListComponent/ChatListComponent.js';

class ChatListContainer extends Component {

  render() {
    return (
        <ChatListComponent
        __activeChatId={this.props._activeChatId} 
        __chatElementClick={this.props._chatElementClick}  __userDetails={this.props._userDetails}/>
    )
  }
}


export default ChatListContainer;
