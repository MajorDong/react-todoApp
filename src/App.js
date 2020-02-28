import React from 'react';
import RouterIndex from './router/index'
import { BrowserRouter as Router } from "react-router-dom";
import store from './stroe/index'
import { Provider } from 'react-redux'

import './App.scss'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <RouterIndex />
        </div>
      </Provider>
    </Router>


  );
}

export default App;
