import React, { useState,useEffect} from 'react'
import axios from 'axios';

function DataFetchingOne(){
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')

    //La donnée :
    const[film,setFilm]=useState({});

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?t=Mr.Nobody"&apikey=9ebe51a8`)
        .then(res => {
            setLoading(false);
            setFilm(res.data);
            setError('');
        })
        .catch(err => {
            setLoading(false);
            setFilm({});
            setError(err.message);
        })
    }, [])
    return (
        <div>

            <h1>{loading ? 
                    ("loading ............") 
                    : 
                    (film.Title)}</h1>
            <img src={film.Poster} alt="Poster Mr.Nobody" />
            
            <h3>{loading ? ("loading ............") : ("Date de Sortie" + " : "+ film.Released)}</h3>
            <p>{loading ? ("loading ............") : ("Box Office" + " : "+film.BoxOffice)}</p>
            {error ? error : null}
            
        </div>
    )
}

export default DataFetchingOne