import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation,Autoplay } from "swiper";
import { Controls } from '../../components/Controls';

const text = '...Uncodnitial love is a succumb to the emotion with every aspect of your being its light and its darkness its euphoria and its madness its life and death; allowing it to enter you entirely to consumer you; without boundires,without question without limits...'

export const Oneimage = () => {
    const arr = ['https://images.pexels.com/photos/4904536/pexels-photo-4904536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    deley:2000
                }}
                className="mySwiper dksd"
                modules={[Autoplay]}
                style={{ "height": "100vh",'borderBottom':"1px solid black"}}
            >
                {arr.map((each) => {
                    return (
                        <SwiperSlide
                        style={{'backgroundImage':`url('${each}')`,"backgroundPosition":"center"}}
                        className='d-flex br h-100 
                        
                        flex-column align-items-center justify-content-between d-flex text-center '>
                        
                        <h3 className='h4 text-white h-100 d-flex align-items-center cursor-pointer flex-column justify-content-center'>Discover</h3>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Controls arr={arr}/>
        </>
    )
}
