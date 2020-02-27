import React from 'react';
import Home from './view/home/home'
import store from './stroe/index'
import { Provider } from 'react-redux'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>

  );
}

export default App;
