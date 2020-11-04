import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Doglist from './Doglist'
import FilterDogDetails from './FilterDogDetails'

const Routes = ({dogs}) => {
    return (
        <Switch>
            <Route exact path='/dogs'>
                <Doglist dogs={dogs}/>
            </Route>
            <Route path="/dogs/:name">
                <FilterDogDetails dogs={dogs} />
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    )
}

export default Routes