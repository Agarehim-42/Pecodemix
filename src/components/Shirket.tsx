import React from 'react'

interface ShirketProps {
    shirketinlogosu:string 
}

const shirket:React.FC<ShirketProps> = ({shirketinlogosu}) => {
    return (
<img className='img-fluid' src={shirketinlogosu} alt="" />
    )
}

export default shirket