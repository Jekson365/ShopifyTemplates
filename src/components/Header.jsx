import React from 'react'
import { AiOutlineUser, AiFillShopping } from 'react-icons/ai';
import { FaSearch, FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';

export const Header = () => {
    const [active, setActive] = useState(true)
    const categories = [
        {
            name: "The active",
            subCats: true,

        },
        {
            name: "collection",
            subCats: true
        },
        {
            name: "activewear",
            subCats: true
        },
        {
            name: "accessories",
            subCats: false
        }
    ]
    return (
        <>
            <header>
                <div className="act-2 m-3">
                    <FaBars className='fs-2' style={{ "cursor": "pointer" }} onClick={() => setActive(true)} />
                </div>
                <nav className={active ? "cats active-navbar" : "cats deactive-navbar"}>
                    <div className="close-btn act-2 w-100 justify-content-end p-3 flex-row align-items-end">
                        <FaTimes onClick={() => setActive(false)} />
                    </div>
                    {categories.map((each) => {
                        return (
                            <>
                                <li className='nav-item fs-5'>{each.name} {each.subCats ? <IoIosArrowDown /> : ""}</li>
                            </>
                        )
                    })}
                    <div className="act mt-5 w-100">
                        <a href='#'>Log in </a>
                        <a href='#'>Create account</a>
                        <div className="search-group d-flex mt-3 mb-3 flex-row w-100 align-items-center">
                            <input type="text" name="" placeholder='search...' className='w-75' />
                            <FaSearch />
                        </div>
                        <a href="#">facebook</a>
                        <a href="#">instagram</a>
                        <a href="#">Email</a>
                    </div>
                </nav>
                <li className='icon'>
                    <img src='https://cdn.shopify.com/s/files/1/0638/5483/7977/files/Shopify_UNCONDITIONAL_Logo_140x.png?v=1660124218' />
                </li>
                <nav>
                    <li className='nav-item fs-3'>
                        <AiOutlineUser className='hd' />
                    </li>
                    <li className='nav-item fs-3'>
                        <FaSearch />
                    </li>
                    <li className='nav-item fs-3'>
                        <AiFillShopping />
                    </li>
                </nav>
            </header>
        </>
    )
}
