import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation,Autoplay } from "swiper";

const text = '...Uncodnitial love is a succumb to the emotion with every aspect of your being its light and its darkness its euphoria and its madness its life and death; allowing it to enter you entirely to consumer you; without boundires,without question without limits...'

export const About = () => {
    const arr = [1, 1, 1, 1]
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    deley:2000
                }}
                className="mySwiper sa"
                modules={[Autoplay]}
                style={{ "height": "100vh",'borderBottom':"1px solid black"}}
            >
                {arr.map((each) => {
                    return (
                        <SwiperSlide className='d-flex h-100 flex-column align-items-center justify-content-between text-center '>
                            <h1 className='unc pt-5'>
                                <span className='dif'>...Uncodnitial</span> love is a succumb to the emotion
                                with every aspect of your being its <span className='gr'>light</span> and
                                its <span className='gr'>darkness</span> its euphoria and its madness its
                                life and death; allowing it to enter you entirely
                                to consumer you; without boundires,without question without limits...
                            </h1>
                            <p className='fs-6 st'>our story</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </>
    )
}
