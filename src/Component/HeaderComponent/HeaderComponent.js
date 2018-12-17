import React, {Component} from 'react';
import UserHeaderOptions from './UserHeaderOptions.js';
import styles from './Header.scss'

class HeaderComponent extends Component {

  render() {
    return (
      <div className={styles.Header}>
        <UserHeaderOptions/>
      </div>
    )
  }
}


export default HeaderComponent;
