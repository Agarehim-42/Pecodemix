import React from 'react'

const About :React.FC = () => {
  return (
  <div className="about-bg-color py-5">
<div className="container">
 <div className="row">

<div className="about-left-side col-12 col-md-6">
<h3 className="text-light py-2">
                  What our clients say about <br /> our awesome solutions
              </h3>
              <p className="text-light py-2">
                  To take a trivial example, which of us ever undertakes <br /> laborious physical exercise,
                  except to obtain some <br /> advantage from it who do not know.
              </p>
              <p className="text-light py-2">
                  Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing.
              </p>
              <p className="text-light py-2">
                  Lorem ipsum is placeholder previewing layouts and visual <br /> mockups.
              </p>
              <p className="text-light py-2">
                  Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.
              </p>
</div>

<div className="about-right-side col-12 col-md-6">
<img className='img-fluid' src="/assets/images/about.jpg" alt="" />
</div>

</div>
    </div>

  </div>
    
  )
}

export default About