import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'


export const Subscirbe = () => {
  return (
    <>
      <div className="sub bg-black d-flex align-items-center p-2">
        <p className="fs-5 text-white w-100" style={{"paddingTop":"10px"}}>Subscribe to our newsletter to receive special offers and first look at new products.</p>
        <div className="form-group d-flex" style={{"textAlign":"center"}}> 
          <input type="text" placeholder='Email Address' />
          <button className='sub d-flex fs-5 p-2'>Subscribe
            <span>
              <HiOutlineArrowLongRight />
            </span>
          </button>
        </div>
      </div>
    </>

  )
}
