import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../view/home/home.js'

const RouterIndex = () =>{
  return (
    <Switch>
      <Route path="/" component={Home}></Route>
    </Switch>
  )
}

export default RouterIndex