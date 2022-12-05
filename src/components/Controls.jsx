import React, { useState } from 'react'
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa'

export const Controls = ({ arr, index }) => {



    return (
        <div className='w-100 container-fluid br-b'>
            <div className="row w-100 d-flex justify-content-between p-4 align-items-center">
                <div className="col d-flex">
                    {arr.map((circle) => {
                        return (
                            <div className="circle m-1"
                                style={circle.active ? { "background": "black" } : { "background": "none" }}
                            ></div>
                        )
                    })}
                </div>
                <div className="col d-flex align-items-center dasd flex-row">
                    <FaLongArrowAltLeft className='fs-1' />
                    <FaLongArrowAltRight className='fs-1' />
                </div>
            </div>
        </div>
    )
}
