import React, { Component } from 'react';
import ItemList from './components/ItemList';
import './App.css';

class App extends Component {
  render() {
    const style = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    };
    return (
      <div style={style}>
        <ItemList />
      </div>
    );
  }
}

export default App;
