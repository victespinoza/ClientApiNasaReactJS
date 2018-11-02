import React, { Component } from 'react';
import './App.css';
import NasaApiClient from './client/NasaApiClient.js'

class App extends Component {
  render() {
  	let apiKey = 'KkKtGVMBa1QG3iq1dF1CDmL5YRRuX3k500doZSnw';

    return (
      <div className="App">
        <header className="App-header">
          <NasaApiClient apiKey={apiKey} />
          
        </header>
      </div>
    );
  }
}

export default App;
