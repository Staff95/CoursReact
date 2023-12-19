import React, { useEffect,useState } from 'react'
import axios from 'axios';



function DataFetchTodos() {
    // Chargement et erreur
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [todos,setTodos] = useState({});

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) =>{
            setLoading(false)
            setTodos(response.data)
            setError('')
        })
        .catch((error) =>{
            setLoading(false)
            setTodos({})
            setError(error)
        })
    },[]);

        return (
            <React.Fragment>
            {loading ? 'Loading...' : todos.map((todo,index) =>{
                return(
                    <div className={todo.completed ? "completed" :"notCompleted"} key={index}>
                        <em>Titre : {todo.title} </em><br/>
                        user  : {todo.userId} <br/>
                        État : {todo.completed ? "Complété" :"Non Complété"} <br/>
                        <hr/>
                    </div>
                )
            })
            }
            </React.Fragment>
          )
}

export default DataFetchTodos