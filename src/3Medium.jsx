import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Route, Link, useHistory
} from "react-router-dom"


// here we use useHistory
// we can push to another link: 
// history.push('/contacts')


// cit.: 
// "The history.push method is invoked when you click on a <Link> component"



// Notice that we didn't put any Link to="/contacts"
const Info = () => {

    const history = useHistory()

    return (
        <button onClick={() => history.push('/contacts')} >Go on contacts!</button>
    )
}

const Contact = () => {
    return (
        <h2>Contacts</h2>
    )
}


const History = () => {
    return (
        <Router>
            <div>
                <Link to="/info">info</Link>
            </div>


            <Switch>
                <Route path="/info" >
                    <Info />
                </Route>

                <Route path="/contacts" >
                    <Contact />
                </Route>

            </Switch>
        </Router>);
}

export default History;