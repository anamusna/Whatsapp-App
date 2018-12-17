import React, {Component} from 'react';
import SearchComponent from '../../Component/SearchComponent/SearchComponent.js';

class SearchContainer extends Component {

  render() {
    return (
      <SearchComponent __searchContacts={this.props._searchContacts} />
    )
  }
}


export default SearchContainer;
