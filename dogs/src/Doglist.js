import React from 'react'
import DogCard from './DogCard'
import './Doglist.css'

const Doglist = ({dogs}) => {
    return(
        <div className="Doglist">
            {dogs.map(dog => (
                <DogCard key={dog.name} name={dog.name} src={dog.src}/>
                // <div key={dog.name}>
                //     <img src={dog.src} alt={dog.name} />

                //     <h3>
                //         <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                //     </h3>
                // </div>
            ))}
        </div>
    )
}

export default Doglist