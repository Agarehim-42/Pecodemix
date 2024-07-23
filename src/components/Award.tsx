import React from 'react'
// Qabaginda use sozu olan "hook"dur

interface awardProps {
    awardTitle:string ;
    awardImage:string ;
    awardBody:string; 
}

const Award: React.FC<awardProps> = ({awardTitle , awardImage , awardBody}) => {
    return (
        <div className='award-card'>
            <img src={awardImage} className="card-img-top awardimg" alt="..." />
            <div className="card-body text-center text-white" >
                <h2 className="card-title py-3">{awardTitle}</h2>
                <p className="card-text py-3">{awardBody}</p>
                
            </div>
        </div>
    )
}

export default Award