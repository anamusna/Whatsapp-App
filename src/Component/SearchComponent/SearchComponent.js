import React, {Component} from 'react';
import styles from './Search.scss'

class SearchComponent extends Component {


  render() {
    return (
      <div className={styles.search}>
        <div className={styles.searchInputHolder}>
          <div className={styles.searchIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"></path></svg>
          </div>
          <input onKeyUp={this.props.__searchContacts} id="contactInput" placeholder="Search or start a new chat"/>
        </div>
      </div>
    )
  }
}


export default SearchComponent;
