/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Switch, Route } from 'react-router'

// Write component imports here //

import Home from './Components/Home'
import About from './Components/About'


// Start Router function here //

export default Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
        </Switch>
    )
}