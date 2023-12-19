import React, { useEffect,useState } from 'react'
import axios from 'axios';

function DataFetchAllContacts() {
    // Chargement et erreur
    const [loading, setloading] = useState(true);
    const [error, setError] = useState('');

    const [contacts,setContacts] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:5000")
        .then((response) =>{
            setLoading(false)
            setContacts(response.data)
            setError('')
        })
        .catch((error) =>{
            setLoading(false)
            setContacts({})
            setError(error)
        })
    },[]);


  return (
    <React.Fragment>
    {
        loading? 'loading...' : users.map((contact, index) => {
            return (
                <div key={index}>
                    nom:{contact.name}
                </div>
            )
        })
    }
    </React.Fragment>
    )
}

export default DataFetchAllContacts