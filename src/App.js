import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import ItemList from './components/ItemList';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    const style = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    };
    return (
      <Provider store={store} >
        <div style={style}>
          <ItemList />
        </div>
      </Provider>
    );
  }
}

export default App;
