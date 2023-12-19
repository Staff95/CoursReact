import React, { useState,useEffect} from 'react'
import axios from 'axios';

function DataFetchingOneBonus(){
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')

    //La donnée :
    const[filmname,setFilmName]=useState({});

    //Bonus
    const[film,setFilm]=useState("");

    const handleFilmNameChanger = event =>{
        setFilmName(event.target.value)

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?t=${filmName}&apikey=9ebe51a8`)
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
            <form>
                <label>Nom du Film</label>
                <input type='text' onChange={handleFilmNameChanger}></input>
            </form>
        </div>
    )
}

export default DataFetchingOneBonus