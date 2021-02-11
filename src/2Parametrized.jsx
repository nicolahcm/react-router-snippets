import React from 'react';
import { BrowserRouter as Router, Switch, Link, useParams, Route } from 'react-router-dom'


// WILL LEARN USEPARAMS HOOK IN DETAIL.

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



    console.log(useParams())

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
                    <Note notes={notes} />
                </Route>
            </Switch>
        </div>

    )
}
export default Parametrized

// useParams:
// 1) Reads "Route path = "/notes/:id" "  ----> knows id will be a parameter passed down to the child!
// 2) passes down the parameter "id" to the children component in Route.
// 3) We can access it inside the children component.