import React, {Component} from 'react';
import classNames from 'classnames';

import chatStyles from './ChatList.scss';


class ChatListElement extends Component {


  componentDidMount(){

  }

  render() {
    return (
      this.props.userDetails.map(function(message, index){
        let messageClass = classNames({
          [chatStyles.activeChat]: message.userId === this.props.___activeChatId,
          [chatStyles.chatList]: true
        })
        let nameSelectByStyle = classNames({
          [chatStyles.chatTitle]: true,
          [chatStyles.name]: true
        })

        return (
              <li key={message.userId} id={message.userId} className={messageClass}>
                <div className={ chatStyles.avatar }>
                  <img alt="user_name" src={message.imageUrl} />
                </div>
                <div className={ chatStyles.chatBody }>
                  <div className={chatStyles.chatMain}>
                    <h5 name="name" className={ chatStyles.chatTitle }>
                      <span className={ chatStyles.matchedStyle }></span>
                      <a className={ chatStyles.name }>{message.userName}</a>
                    </h5>
                    <div className={ chatStyles.Chattime }>
                      <span>{message.lastMessageTime}</span>
                    </div>
                  </div>
                  <div className={ chatStyles.chatStatus }>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="#4FC3F7" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg>
                      {message.lastMessage}
                    </span>
                  </div>
                </div>
              </li>

        )
      }.bind(this))
    )
  }
}


export default ChatListElement;