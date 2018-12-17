import React, {Component} from 'react';

import ChatPannelStyle from './ChatPannelStyle.css';

class ChatPanelComponent extends Component {

  render() {
    return (
      <div id="chatMessages" className={ChatPannelStyle.ChatPanelHolder}>
        {this.props.messageList.map( function(message, i){
            return (
              <div id={message.commentId} key={message.commentId} className={ ChatPannelStyle['user_style_'+message["user"] ] }>
              <div className={ChatPannelStyle.msg}>

                {message["description"]}
                <span className={ChatPannelStyle.time}>
                  {message["time"]}
                </span>

                <span onClick={this.props.deleteChat} >
                  D*
                </span>
              </div>
            </div>)

        }.bind(this) )}
      </div>
    )
  }
}


export default ChatPanelComponent;
