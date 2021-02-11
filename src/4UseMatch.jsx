import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

// Here we use RouteMatch, which is similar to the useParams
// What are the differences???? TO TEST IT IN FUTURE!


// 1) Constraint: Router and useRouteMatch cannot be in the same component!

let notes = [
    {
        "title": "hi",
        "id": 1
    },
    {
        "title": "nine",
        "id": 2
    },
    {
        "title": "five",
        "id": 3
    },
    {
        "title": "end",
        "id": 4
    }
]


const Note = ({ note }) => {

    return (
        <div>
            <h2>{note.title} </h2>
        </div>
    )
}

const App = () => {

    console.log(useRouteMatch())

    const match = useRouteMatch('/notes/:id')
    //console.log(match)

    const noteMatch = notes.find(note => note.id === parseInt(match.params.id))

    return (
        <div>
            <div>
                {
                    notes.map(note =>
                        <li key={note.id} > <Link to={`/notes/${note.id}`} >{note.title}</Link> </li>
                    )
                }
            </div>

            <Switch>
                <Route path="/notes/:id" >
                    <Note note={noteMatch} />
                </Route>
            </Switch>

        </div>
    )
}


const UseMatch = () => {
    return (

        <App />

    );
}

export default UseMatch;