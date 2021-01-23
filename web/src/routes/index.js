import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../views/home'
import Error from '../error'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}