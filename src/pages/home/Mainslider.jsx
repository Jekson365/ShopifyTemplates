import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from "swiper";
import 'swiper/css'
import "swiper/css/pagination";
import 'swiper/css/navigation'
import { useState } from 'react';
import { Controls } from '../../components/Controls';

export const Mainslider = () => {
    const [activeCircle, setActiveCircle] = useState(0)
    const sliderItems = [
        {
            img: "https://images.pexels.com/photos/6712117/pexels-photo-6712117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            active:false
        },
        {
            img: "https://images.pexels.com/photos/1300571/pexels-photo-1300571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            active:true
        }
    ]
    return (
        <>
            <Swiper
                className='mySwiper'
                style={{ 'height': "100vh" }}
                onSlideChange={() => activeCircle > 0 ? setActiveCircle(activeCircle + 1) : activeCircle(activeCircle - 1)}
                modules={[Navigation]}
            >
                {sliderItems.map((each) => {
                    return (

                        <SwiperSlide
                            style={{ "backgroundImage": `url('${each.img}')` }}>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Controls arr={sliderItems} index={activeCircle}/>

        </>
    )
}
