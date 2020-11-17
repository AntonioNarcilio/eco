import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/landing/index'
// import App from './App'

function Routes() {
    return(
        <Router>
            <Route exact path={'/'} component={Landing}/>
            {/* <Route exact path={'/createPoint'} component={}/>
            <Route exact path={'/searchPoint'} component={}/> */}
        </Router>
    )
}

export default Routes