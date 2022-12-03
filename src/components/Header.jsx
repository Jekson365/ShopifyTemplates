import React from 'react'
import { AiOutlineUser, AiFillShopping } from 'react-icons/ai';
import { FaSearch, FaTimes } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const [active, setActive] = useState(true)
    const categories = [
        {
            name: "The active",
            subCats: [
                {
                    name: "",
                    items: ['HIM', 'HER', 'THEM'],
                    classN:"d-flex flex-row"
                },
                
            ],

        },
        {
            name: "collection",
            subCats: [
                {
                    name: "STEPED IN THE DARKNESS",
                    items: ['HIM', 'HER', 'THEMM'],
                },
                {
                    name: "BATHED IN LIGHT",
                    items: ['HIM', 'HER', 'THEMM'],
                },
            ],
        },
        {
            name: "activewear",
            subCats: [
                {
                    name: "",
                    items: ['MENSWEAR','WOMENSWEAR'],
                    classN:"d-flex"
                },
                
            ]
        },
        {
            name: "accessories",
            subCats: []
        }
    ]
    const handleRotate = (current) => {
        console.log(current)
    }
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
                                <li className='nav-item fs-5'
                                    onClick={(e) => handleRotate(e.target)}
                                >{each.name} {each.subCats ? <IoIosArrowDown className='ar-btn' /> : ""}

                                    <div className="sub-cats">
                                        {each.subCats.map((sub) => {
                                            return (
                                                <div className='d-flex flex-column align-items-start'>
                                                    <p className='p m-2'>{sub.name}</p>
                                                    <div className={sub.classN}>

                                                        {sub.items.map((itemName) => {
                                                            return (
                                                                <>
                                                                    <li className='m-2'>{itemName}</li>
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </li>
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
