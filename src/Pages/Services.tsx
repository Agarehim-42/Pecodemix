import React from 'react'

const Services:React.FC = () => {
  return (
    <div className="Services-bg-color py-5">
    <div className="container">
     <div className="row">
    
    <div className="about-left-side col-12 col-md-6">
    <h2 className="text-light py-5">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur alias beatae dolore quaerat fugit repudiandae. Rem delectus, assumenda accusamus soluta quasi modi adipisci reprehenderit odit iure perferendis ipsum nisi eos?
                  </h2>

                  {/* <h4 className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quo suscipit iure adipisci totam possimus voluptates, earum voluptatem asperiores, ipsum dolorum officia nostrum ex nemo, mollitia quam quidem! Saepe sint fuga a, quam iste veniam temporibus aut blanditiis?</h4> */}

    </div>
    
    <div className="about-right-side col-12 col-md-6">
    <img className='img-fluid py-5 px-5' src="/assets/images/Services.png" alt="" />
    </div>
    
    </div>
        </div>
    
      </div>
  )
}

export default Services