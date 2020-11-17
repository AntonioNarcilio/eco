import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './pages/Landing/index'
import CreatePoint from './pages/CreatePoint'
import SearchPoint from './pages/SearchPoint'

function Routes() {
    return(
        <Router>
            <Route exact path={'/'} component={Landing}/>
            <Route exact path={'/createPoint'} component={CreatePoint}/>
            <Route exact path={'/searchPoint'} component={SearchPoint}/>
        </Router>
    )
}

export default Routes