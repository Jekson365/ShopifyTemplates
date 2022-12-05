import React from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'



export const Search = ({search,setSearch}) => {
  return (
    <>
        <div className="w-100 bg-white daxma d-flex align-items-center p-2" 
        style={search ? {"opacity":"1"} : {"opacity":"0"}}
        >
            <FaSearch className='fs-5'/>
            <input type="text" className='w-100 m-1' />
            <FaTimes className='fs-5' onClick={()=>setSearch(false)}/>
        </div>
    </>
  )
}
