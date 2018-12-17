import React, {Component} from 'react';
import ChatListElement from './ChatListElement.js';
import chatStyles from './ChatList.scss';


class ChatListComponent extends Component {
  render() {
    return (
      <ul className={chatStyles.chatListHolder} onClick={this.props.__chatElementClick} id="chatList">
        <ChatListElement
        ___activeChatId={this.props.__activeChatId}
        ___chatElementClick={this.props.__chatElementClick} userDetails={this.props.__userDetails}/>
      </ul>
    )
  }
}


export default ChatListComponent;
