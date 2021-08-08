import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import DcScreen from '../components/dc/DcScreen'
import HeroeScreen from '../components/heroes/HeroeScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import SearchScreen from '../components/search/SearchScreen';

const DashboardRouter = () => {
  return (
    <>
      <Navbar />
     
     <main className="container mt-2">
       <Switch>
         <Route exact path="/dc" component={ DcScreen } />
         <Route exact path="/marvel" component={ MarvelScreen } />
         <Route exact path="/hero/:heroeId" component={ HeroeScreen } />
         <Route exact path="/search" component={ SearchScreen } />
         <Redirect to="/marvel" />
       </Switch>
     </main>
    </>
  )
}

export default DashboardRouter
