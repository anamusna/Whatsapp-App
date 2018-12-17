import React, { Component } from 'react';
import styles from './App.scss';
import common from './common.scss';
import CombinedContainers from './Container/CombinedContainers';
import { subscribeToTimer } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "timestamp": 'no timestamp yet'
    }

    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }


  render() {
    return (
      <div className={common.fullHeight}>
        <div className={styles.App}>
          <CombinedContainers />
          <p className="App-intro">
            This is the timer value: {this.state.timestamp}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
