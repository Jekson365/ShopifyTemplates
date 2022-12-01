import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from "swiper";
import 'swiper/css'
import "swiper/css/pagination";
import 'swiper/css/navigation'
import { useState } from 'react';

export const Mainslider = () => {
    const sliderItems = [
        {
            img: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/1300571/pexels-photo-1300571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
        <>

            <Swiper
                className='mySwiper'
                style={{ 'height': "100vh" }}
            >
                {sliderItems.map((each) => {
                    return (

                        <SwiperSlide
                            style={{ "backgroundImage": `url('${each.img}')` }}>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </>
    )
}
