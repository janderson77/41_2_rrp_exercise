import React from 'react'
import {Link} from 'react-router-dom'
import './DogCard.css'

const DogCard = ({name, src}) => {
    return(
        <div key={name} className="DogCard">
            <img className="DogCard-img" src={src} alt={name} />
            <hr></hr>
            <h3 className="DogCard-link">
                <Link to={`/dogs/${name.toLowerCase()}`}>{name}</Link>
            </h3>
        </div>
    )
}

export default DogCard