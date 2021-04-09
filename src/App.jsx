import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import { Redirect, Route, Switch } from 'react-router'

const App = () => {
  return (
    <>
      <Header />
      <Switch>        
        <Route exact path='/' render={() => {return(<Redirect to='/about' />)}}/>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/projects' component={Projects}></Route>        
      </Switch>      
      <Footer />
    </>
  );
}

export default App;
