import React from 'react'
import Shirket from './Shirket'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';



const shirketler: React.FC = () => {
    return (
        <div className='shirketlerbgcolor '>
            <div className="container">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}



                    className="mySwiper shirketswiper " >

                    <SwiperSlide className='img-fluid'><Shirket shirketinlogosu="/assets/images/shirketler/shirket1.svg" /></SwiperSlide>
                    <SwiperSlide className='img-fluid'><Shirket shirketinlogosu="/assets/images/shirketler/shirket2.svg" /></SwiperSlide>
                    <SwiperSlide className='img-fluid'><Shirket shirketinlogosu="/assets/images/shirketler/shirket3.svg" /></SwiperSlide>
                    <SwiperSlide className='img-fluid'><Shirket shirketinlogosu="/assets/images/shirketler/shirket4.svg" /></SwiperSlide>



                </Swiper>
            </div>

        </div>
    )
}

export default shirketler