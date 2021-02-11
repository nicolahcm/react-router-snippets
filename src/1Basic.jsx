import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom"



const Home = () => {
    return (
        <div>
            <h2>HOME</h2>
        </div>
    )
}


const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
        </div>
    )
}

const Info = () => {
    return (
        <div>
            <h2>Info</h2>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <div>
                <Link style={{ padding: "5px" }} to="/" >home</Link>
                <Link style={{ padding: "5px" }} to="/contact" >contact</Link>
                <Link style={{ padding: "5px" }} to="/info" >info</Link>
            </div>

            <div>
                Hi Everyone
            </div>

            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/info" >
                    <Info />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div >

    );
}

export default App;