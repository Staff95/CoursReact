import React from 'react'


function Stylesheets(props) {
    let couleur = props.primary? 'primary' : '';

    return (
        <div className={couleur}> Stylesheets</div>
    )
}
export default Stylesheets