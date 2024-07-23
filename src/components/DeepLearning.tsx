import React from 'react'
import Button from './Button'

const DeepLearning: React.FC = () => {
    return (

        <div className="deep-learning text-white  ">
            <div className='container'>
                <div className="row">
                    <div className="deep-left-side col-12 col-md-6 ">
<img className='img-fluid pb-5' src="/assets/images/deeplearning/deep.svg" alt="Programis DEvOPs Agarehim FrontEnd Backen" />
                    </div>

                    <div className="deep-right-side col-12 col-md-6 d-flex flex-column justify-content-center ">
<h2 className='deeph2'>Apply AI, Deep Learning and Data Sciece to solve</h2>
<p className='deepparag py-2'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
<Button inTextBtn="Learn More" shekil="" klassadi="learn-more" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeepLearning