import React from 'react'
import Button from './Button'
import { ReactTyped } from "react-typed";


const Introduction: React.FC = () => {
    return (
        <section className='introduction  introduction-bg-color py-5'>
            <div className="container text-white">
                <div className="row">
                    <div className="intro-left col-12 col-md-6">
                        <h6 className='text-uppercase text-primary mb-4'>Next genaretion platform</h6>
                        <ReactTyped className='h1'
                            strings={[
                                "Artificial Intelligence",
                                "Cyber Security",
                                "Internet of Things",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            
                            loop
                        >
                        
                        </ReactTyped>

                        
                        <p className='Loremp my-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                        <div className="btns-groups d-flex gap-2">
                            <Button inTextBtn="Get Started" shekil="" klassadi="get-started" />
                            <Button inTextBtn="Watch Video" shekil="/assets/images/introduction/play.svg" klassadi="watch-video"/>


                        </div>
                    </div>

                    <div className="intro-right col-12 col-md-6">
                        <img src="/assets/images/introduction/rightside.svg" alt="" className='img-fluid' />
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Introduction