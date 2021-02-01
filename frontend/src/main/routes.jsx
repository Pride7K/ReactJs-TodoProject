import React from "react"
import { Route, Router, Redirect, hashHistory } from "react-router"
import About from "../about/about"
import Todo from "../todo/todo"

export default props => {
    return (
        <Router history={hashHistory}>
            <Route path="/todos" component={Todo}></Route>
            <Route path="/about" component={About}></Route>
            <Redirect from="*" to="/todos"></Redirect>
        </Router>
    )
}