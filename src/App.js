import React, { Component } from 'react';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
