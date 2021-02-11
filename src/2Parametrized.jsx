import React from 'react';
import { BrowserRouter as Router, Switch, Link, useParams, Route } from 'react-router-dom'


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


const Note = ({ notes }) => {

    let id = useParams().id   // 1)  We can access the id from the Route path = "/notes/:id"
    let requiredNote = notes.find(note => note.id === parseInt(id))
    console.log(requiredNote)

    return (
        <div>
            <h2>{requiredNote.title} </h2>
        </div>
    )
}



// Notice that Link to= "..." has to be well defined and precise.
// Route path = "... " should coincide with one of the links above. 

const Parametrized = () => {

    return (
        <Router>
            <div>
                {
                    notes.map(note =>
                        <li key={note.id} > <Link to={`/notes/${note.id}`} >{note.title}</Link> </li>
                    )
                }
            </div>

            <Switch>
                <Route path="/notes/:id" >
                    <Note notes={notes} />
                </Route>
            </Switch>

        </Router>
    )
}

export default Parametrized