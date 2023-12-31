import React, { useEffect,useState } from 'react'
import axios from 'axios';


function DataFetchAll() {
    // Chargement et Erreur
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [posts, setPosts] = useState({});

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then((response) =>{
            setLoading(false)
            setPosts(response.data)
            setError('')
        })
        .catch((error) =>{
            setLoading(false)
            setPosts({})
            setError(error)
        })
    },[]);


  return (
    <React.Fragment>
    {loading ? 'Loading...' : posts.map((post,index) =>{
        return(
            <div key={index}>
                titre : {post.title}
                <hr />
                body  : {post.body}
            </div>
        )
    })

    }



    </React.Fragment>
  )
}

export default DataFetchAll