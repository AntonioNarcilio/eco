import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/landing/index'
// import App from './App'

function Routes() {
    return(
        <Router>
            <Route exact path={'/'} component={Landing}/>
        </Router>
    )
}

export default Routes