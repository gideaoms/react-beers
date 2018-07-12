import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BeerList from '../components/BeerList'
import BeerDetails from '../components/BeerDetails'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={BeerList} />
    <Route path='/:id' component={BeerDetails} />
  </Switch>
)

export default Routes
