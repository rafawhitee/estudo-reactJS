import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from '../src/screens/Home'
import Produtos from '../src/screens/Produtos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Home} path='/home' exact />
        <Route component={Produtos} path='/produtos' exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes