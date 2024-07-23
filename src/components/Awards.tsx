import React, { useState, useEffect } from 'react'
import Award from './Award'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// JSON Java Script Object Notation 
// import awardinfo from "../awards.json"
import axios from 'axios';

interface Award {
    title: string;
    image: string;
    body: string;
}

const Awards: React.FC = () => {
    const [award , setAward] = useState<Award[]>([])
    // use ile baslayanlar hooklardir useState , useRef , useState
    // UseEffect burda HOFF icindeki funksiya ise callbackdir
    // get delete put respful API
    useEffect(()=>{
        axios.get("src/awards.json")
        .then(cavab => setAward(cavab.data) )
        .catch(err=> console.log(err))
    } , [])


    return (
        <div className='Awardsection py-5'>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
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
                modules={[Pagination, Autoplay]}
                className="mySwiper py-5"
            >


                {
                    // Callback ; icinde funksiya saxlayir ve ozun yeni function yazisi callback
                    // HOF Higher Order Function - map sozudur
                    award.map((birMukafat , index)=> (
                        <SwiperSlide key={index}><Award awardTitle={birMukafat.title} awardImage={birMukafat.image} awardBody={birMukafat.body} /></SwiperSlide>
                    )
                    )



                }



            </Swiper >
        </div>

    )
}

export default Awards