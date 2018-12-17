import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer/HeaderContainer.js';
import SearchContainer from './SearchContainer/SearchContainer.js';
import ChatListContainer from './ChatListContainer/ChatListContainer.js';
import ChatMsgContainer from './ChatMsgContainer/ChatMsgContainer.js';
import AppStyle from '../App.scss';
import styles from '../App.scss';

class CombinedComponents extends Component {

  constructor(props) {
    super(props);


    this.state = {
      "one_on_one_messages": {
        "123456": {
          "userName": "Ansumana",
          "imageUrl": "./images/avatar.png",
          chatMessages: [
            {
              "time": "10:05 AM",
              "description": "hellooooo!!!!!!!!!!",
              "commentId": 4,
              "user": 1
            },
            {
              "time": "10:06 AM",
              "description": "Yo, what's popping'",
              "commentId": 5,
              "user": 0
            },
            {
              "time": "10:07 AM",
              "description": "codes and more codes",
              "commentId": 6,
              "user": 1
            },
            {
              "time": "10:08 AM",
              "description": "and code",
              "commentId": 7,
              "user": 1
            },
            {
              "time": "10:09 AM",
              "description": "again code",
              "commentId": 8,
              "user": 1
            },
            {
              "time": "10:10 AM",
              "description": "hahahaha",
              "commentId": 9,
              "user": 0
            },
            {
              "time": "10:11 AM",
              "description": "Oh yeah, NEVER STOP HACKING DUDE!!!",
              "commentId": 12,
              "user": 0
            },
            {
              "time": "10:12 AM",
              "description": "hahahaha",
              "commentId": 10,
              "user": 1
            },


          ]
        },
        "123457": {
          "userName": "Hadi",
          "imageUrl": "./images/avatar.png",
          chatMessages: [
            {
              "time": "10:05 AM",
              "description": "hey sup!",
              "commentId": 4,
              "user": 1
            },
            {
              "time": "10:06 AM",
              "description": "Yo mate, what's up",
              "commentId": 5,
              "user": 0
            },
            {
              "time": "10:07 AM",
              "description": "All cool",
              "commentId": 6,
              "user": 1
            },
            {
              "time": "10:08 AM",
              "description": "Been a while",
              "commentId": 7,
              "user": 1
            },
            {
              "time": "10:09 AM",
              "description": "what u up to?",
              "commentId": 8,
              "user": 1
            },
            {
              "time": "10:10 AM",
              "description": "Code, code and code again!!!",
              "commentId": 9,
              "user": 0
            },
            {
              "time": "10:11 AM",
              "description": "Oh yeah, NEVER STOP HACKING DUDE!!!",
              "commentId": 10,
              "user": 1
            },
          ]
        },
        "123458": {
          "userName": "Daniel",
          "imageUrl": "./images/avatar.png",
          chatMessages: [
            {
              "time": "10:05 AM",
              "description": "hey mate!",
              "commentId": 4,
              "user": 1
            },
            {
              "time": "10:06 AM",
              "description": "Yo dude, what ya up to?",
              "commentId": 5,
              "user": 0
            },
            {
              "time": "10:07 AM",
              "description": "i dont think u want to know",
              "commentId": 6,
              "user": 1
            },
            {
              "time": "10:08 AM",
              "description": "Code code code",
              "commentId": 7,
              "user": 1
            },
            {
              "time": "10:09 AM",
              "description": "hahahaha",
              "commentId": 8,
              "user": 1
            },
            {
              "time": "10:010 AM",
              "description": "Oh yeah, NEVER STOP HACKING DUDE!!!",
              "commentId": 9,
              "user": 0
            },
            {
              "time": "10:11 AM",
              "description": "see u!!!",
              "commentId": 10,
              "user": 1
            },
          ]
        },
        "123459": {
          "userName": "Andrea",
          "imageUrl": "./images/avatar.png",
          chatMessages: [
            {
              "time": "10:05 AM",
              "description": "hiya!",
              "commentId": 4,
              "user": 1
            },
            {
              "time": "10:06 AM",
              "description": "hey, been a while",
              "commentId": 5,
              "user": 0
            },
            {
              "time": "10:07 AM",
              "description": "Yea been ages",
              "commentId": 6,
              "user": 1
            },
            {
              "time": "10:08 AM",
              "description": "what's going on?",
              "commentId": 7,
              "user": 1
            },
            {
              "time": "10:09 AM",
              "description": " oh yeah, code and code again!!!",
              "commentId": 9,
              "user": 0
            },
            {
              "time": "10:09 AM",
              "description": "Oh yeah, NEVER STOP HACKING DUDE!!!",
              "commentId": 10,
              "user": 1
            },
            {
              "time": "10:10 AM",
              "description": "want to code?",
              "commentId": 8,
              "user": 1
            },
            {
              "time": "10:10AM",
              "description": " oh yeah!!!",
              "commentId": 9,
              "user": 0
            },
          ]
        }
      },
      "userDetails": [],
      "activeChatId": Number(123456)
    }

    this.chatElementClick = (e) => {
      this.setState({
        "activeChatId": Number(e.target.id)
      });
    }

    this.sendMessage = () => {
      return this.state.one_on_one_messages[this.state.activeChatId]
    }

    this.getUserList = (e) => {
      let detail = {},
        userData = e["userDetails"];

      for (var i in e["one_on_one_messages"]) {
        let currentMessage = e["one_on_one_messages"][i];
        userData.push({
          "userName": currentMessage["userName"],
          "imageUrl": currentMessage["imageUrl"],
          "lastMessage": currentMessage["chatMessages"][currentMessage["chatMessages"].length - 1]["description"],
          "lastMessageTime": currentMessage["chatMessages"][currentMessage["chatMessages"].length - 1]["time"],
          "userId": Number(i)
        })
      }
      console.log(userData)
      return userData

    }

  }


  componentDidMount() {

    this.setState({ userDetails: this.getUserList(this.state) })
  }

  searchContacts = function () {

    let contactInput,
      filter, contactList, contactListContainer;


    contactInput = document.getElementById("contactInput");
    filter = contactInput.value.toUpperCase();

    if (filter === 0) {
      return
    }

    contactListContainer = document.getElementById("chatList");
    contactList = contactListContainer.getElementsByTagName("li");

    for (var i = 0; i < contactList.length; i++) {
      var elemSelector = contactList[i].getElementsByTagName("h5")[0];

      if (elemSelector.innerHTML.toUpperCase().indexOf(filter, i) > -1) {
        console.log(filter);
        // elemSelector.innerHTML = filter
        contactList[i].style.display = "flex";
      } else {
        contactList[i].style.display = "none";
      }
    }
  }

  render() {
    return (
      <div className={styles.WhatsappContainer}>
        <div className={AppStyle.leftPane}>
          <div className={AppStyle.flexboxItemGrow}>
            <HeaderContainer />
            <SearchContainer
              _searchContacts={this.searchContacts} />
            <ChatListContainer
              _activeChatId={this.state.activeChatId}
              _chatElementClick={this.chatElementClick}
              _userDetails={this.state.userDetails} />
          </div>
        </div>
        <div className={AppStyle.rightPane}>
          <HeaderContainer />
          <ChatMsgContainer
            _activeChatId={this.state.activeChatId}
            _chatMessages={this.sendMessage()} />
        </div>
      </div>
    )
  }
}


export default CombinedComponents;
