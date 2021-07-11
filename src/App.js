import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/nav'
import { Footer } from './components/Footer'
import Particles from 'react-particles-js'
const particle = require('./particle.json')

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router basename={window.location.pathname || ''}>
          <NavigationBar />
            <Switch>
              <Layout>
                <Route exact path="/" component={Header} />
                <Route path="/projects" component={Projects} />
              </Layout>
            </Switch>
        </Router>
        <Footer />
        <Particles
        params={particle}/>
      </React.Fragment>
    )
  }
}

export default App
