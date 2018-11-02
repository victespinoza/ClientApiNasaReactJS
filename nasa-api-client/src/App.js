import React, { Component } from 'react';
import './App.css';
import NasaApiClient from './client/NasaApiClient.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <NasaApiClient/>
          
        </header>
      </div>
    );
  }
}

export default App;
