"use client"
import React, { useState } from 'react'
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Drawer } from "flowbite-react";
import Link from 'next/link';
import { IoReorderThree } from "react-icons/io5";







export default function Header() {

    const [isOpennav, setIsOpennav] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);


    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    return (
        <div>

            {/* offcanvas */}

            <Drawer open={isOpen} onClose={handleClose} position="right">
                <Drawer.Header title="Drawer" />
                <Drawer.Items>
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                        Supercharge your hiring by taking advantage of our&nbsp;
                        <a href="#" className="text-cyan-600 underline hover:no-underline dark:text-cyan-500">
                            limited-time sale
                        </a>
                        &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
                        job board.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <a
                            href="#"
                            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                            Learn more
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Get access&nbsp;


                            <div className="ms-2 h-3.5 w-3.5 rtl:rotate-180">
                                <Link href={"/"}>
                                    <img src="/images/logo.png" alt="logo" />
                                </Link>

                            </div>




                        </a>
                    </div>
                </Drawer.Items>
            </Drawer>
            {/* offcanvas */}


            {/* //Header start // */}

            <div className=''>

                <div className='w-full border-b-[1px] border-gray-200'>
                    <div className='max-w-[1280px] hidden xl:block mx-auto py-4 sm:px-6 lg:px-8 xl:flex items-center justify-between'>
                        <div className=''>
                            <p className='text-[13px]'>
                                Contact us 24/7 : +91-9781234560 / furniture@gmail.com
                            </p>
                        </div>

                        <div className='flex text-[13px] hover:text-orange-400 md:text-right cursor-pointer'>
                            <p className=''>
                                <Link href={'/login-Page'}>
                                    Login / Register
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>

                <div className='w-full border-b-[1px] border-gray-200'>

                    <div className='max-w-[1280px] mx-auto flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8'>

                        <div>
                            <Link href="/">
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="logo" width={150} />
                            </Link>
                        </div>

                        <div className='flex items-center justify-around gap-3'>

                            <div className='lg:block hidden'>
                                <div className=' relative border-[1px] w-[300px] my-4 h-11 flex items-center'>
                                    <input type="text" placeholder='Search product...' className=' border-none ps-5 text-[13px]' />
                                    <FaSearch className='absolute right-4' />
                                </div>
                            </div>

                            <div className='gap-5'>
                                <Link href={'/details-page/wishlist'}>
                                    <FaHeart className='border-[1px] border-gray-200 hover:text-[#c09578]
                                    cursor-pointer text-[20px] py-3 px-3 w-11 h-11'/>
                                </Link>
                            </div>





                            <div onClick={() => setIsOpen(true)} className='relative flex items-center border-[1px] hover:text-[#c09578]'>
                                <span className="absolute top-3 -left-2 bg-[#c09578] text-white rounded-full px-1 text-xs flex items-center justify-center">0</span>
                                <IoMdCart className='cursor-pointer h-11 w-11 lg:w px-3 text-[18px] border-r-[1px]' />

                                <div className='lg:block hidden'>
                                    <div className='flex items-center'>
                                        <p className='ps-2 cursor-pointer'>Rs. 0.00</p>
                                        <FaAngleDown className='w-6 cursor-pointer' />
                                    </div>
                                </div>



                            </div>
                            <div className='lg:hidden block' onClick={toggleDrawer}>
                                <IoReorderThree className='border-[1px] border-gray-200 hover:text-[#c09578]
                                cursor-pointer text-[20px] py-1 px-1 w-12 h-12'/>
                            </div>
                        </div>

                    </div>

                </div>

                <div>

                    <div className='max-w-[100%] shadow mx-auto border-b'>
                        <ul className='flex gap-10 justify-center font-sans'>
                            <Link href={"/"}> <li className='text-[13px] hover:text-orange-400 font-semibold cursor-pointer py-5'>HOME

                            </li></Link>
                            <li className='relative group flex items-center gap-1 text-[13px] font-semibold cursor-pointer'>
                                <Link href={'/category'} className='hover:text-orange-400'>LIVING</Link>
                                <FaAngleDown className='mt-[3px]' />

                                <ul className="flex absolute min-w-[580px] px-[25px] pt-[30px] pb-[35px] bg-white border border-[#ebebeb]
                                     [transform:perspective(600px)_rotateX(-90deg)] [transform-origin:0_0_0]
                                     right-auto opacity-0 invisible
                                     transition-all duration-500 z-[9] top-full text-left
                                     group-hover:opacity-100 group-hover:visible 
                                     group-hover:[transform:perspective(600px)_rotateX(0deg)] gap-10 justify-center">
                                    <li>
                                        <a className='font-bold text-[16px]'>Tables</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px]'><Link href={"/categories"}>Side and End Tables</Link></li>
                                            <li className='py-[5px]'><Link href={"/categories"}>Nest Of Tables</Link></li>
                                            <li className='py-[5px]'><Link href={"/categories"}>Console Table</Link></li>
                                            <li className='py-[5px]'><Link href={"/categories"}>Coffee Table Sets</Link></li>
                                            <li className='py-[5px]'><Link href={"/categories"}>Coffee Tables</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className='font-bold text-[16px]'>Living Storage</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Prayer Units</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Display Unit</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Shoe Racks</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Chest Of Drawers</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Cabinets and Sideboard</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Bookshelves</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">TV Units</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className='font-bold text-[16px]'>Mirrors</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px] text-gray-600 text-[15px]' ><a href="#">Wooden Mirrors</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </li>

                            <li className='relative group flex items-center gap-1 text-[13px] font-semibold cursor-pointer'>
                                <Link href={'/category'} className='hover:text-orange-400'>SOFA</Link>

                                <ul className="flex  absolute min-w-[580px] px-[25px] pt-[30px] pb-[35px] bg-white border border-[#ebebeb]
                                     [transform:perspective(600px)_rotateX(-90deg)] [transform-origin:0_0_0]
                                     right-auto opacity-0 invisible
                                     transition-all duration-500 z-[9] top-full text-left
                                     group-hover:opacity-100 group-hover:visible 
                                     group-hover:[transform:perspective(600px)_rotateX(0deg)] gap-10 justify-center">
                                    <li>
                                        <a className='font-bold text-[16px]'>Sofa Cum Bed</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px]'><Link href={"/categories"}>Wooden Sofa Cum Bed</Link></li>

                                        </ul>
                                    </li>
                                    <li>
                                        <a className='font-bold text-[16px]'>Sofa Sets</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">L Shape Sofa</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">1 Shape Sofa</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">2 Shape Sofa</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">3 Shape Sofa</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">4 Shape Sofa</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className='font-bold text-[16px]'>Swing Jhula</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px] text-gray-600 text-[15px]' ><a href="#">Wooden Jhula</a></li>
                                        </ul>
                                    </li>
                                </ul>

                                <FaAngleDown className='mt-[3px]' />


                            </li>
                            <li className='relative group flex items-center gap-1 text-[13px] font-semibold cursor-pointer'>
                                <div className='flex items-center gap-1 hover:text-orange-400'>
                                    <Link href={'/category'}>PAGES</Link>
                                    <FaAngleDown className='mt-[3px]' />
                                </div>


                                <ul className=" flex absolute min-w-[220px] pt-[30px] pb-[35px] bg-white border border-[#ebebeb]
                                     [transform:perspective(600px)_rotateX(-90deg)] [transform-origin:0_0_0]
                                     right-auto opacity-0 invisible
                                     transition-all duration-500 z-[9] top-full text-left
                                     group-hover:opacity-100 group-hover:visible 
                                     group-hover:[transform:perspective(600px)_rotateX(0deg)] gap-10 justify-center">
                                    <li>

                                        <ul className=' py-3 text-gray-600'>
                                            <li className='py-[5px] px-[25px] text-gray-600 text-[15px] hover:bg-slate-100'><Link href={"/categories"}>About Us</Link></li>
                                            <li className='py-[5px] px-[25px] text-gray-600 text-[15px] hover:bg-slate-100'><Link href={"/categories"}>Cart</Link></li>
                                            <li className='py-[5px] px-[25px] text-gray-600 text-[15px] hover:bg-slate-100'><Link href={"/categories"}>Checkout</Link></li>
                                            <li className='py-[5px] px-[25px] text-gray-600 text-[15px] hover:bg-slate-100'><Link href={"/categories"}>Frequently Questions</Link></li>



                                        </ul>
                                    </li>
                                </ul>




                            </li>
                            <li className='text-[13px] hover:text-orange-400 font-semibold cursor-pointer py-5'>CONTACT US</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* // mobile Nav */}

            {isOpennav && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-10"
                    onClick={toggleDrawer}
                ></div>
            )}

            <div
                className={`fixed top-0 -left-32 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >

                <div>

                    <button onClick={toggleDrawer}>
                        <FaTimes size={20} />
                    </button>

                    <div className='max-w-[550px] mx-auto'>
                        <ul className='font-sans'>
                            <li className='text-[13px] hover:text-orange-400 font-semibold cursor-pointer py-5'>HOME

                            </li>
                            <li className='relative group flex items-center gap-1 text-[13px] font-semibold cursor-pointer'>
                                <Link href={'/category'} className='hover:text-orange-400'>LIVING</Link>
                                <FaAngleDown className='mt-[3px]' />

                                <ul className="flex absolute min-w-[580px] px-[25px] pt-[30px] pb-[35px] bg-white border border-[#ebebeb]
                 [transform:perspective(600px)_rotateX(-90deg)] [transform-origin:0_0_0]
                 right-auto opacity-0 invisible
                 transition-all duration-500 z-[9] top-full text-left
                 group-hover:opacity-100 group-hover:visible 
                 group-hover:[transform:perspective(600px)_rotateX(0deg)] gap-10 justify-center">
                                    <li>
                                        <a className='font-bold text-[16px]'>Tables</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px]'><Link href={"/categories"}>Side and End Tables</Link></li>
                                            <li className='py-[5px]'><Link href={"/categories"}>Nest Of Tables</Link></li>
                                            <li className='py-[5px]'><Link href={"/categories"}>Console Table</Link></li>
                                            <li className='py-[5px]'><Link href={"/categories"}>Coffee Table Sets</Link></li>
                                            <li className='py-[5px]'><Link href={"/categories"}>Coffee Tables</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className='font-bold text-[16px]'>Living Storage</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Prayer Units</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Display Unit</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Shoe Racks</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Chest Of Drawers</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Cabinets and Sideboard</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">Bookshelves</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">TV Units</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className='font-bold text-[16px]'>Mirrors</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px] text-gray-600 text-[15px]' ><a href="#">Wooden Mirrors</a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </li>

                            <li className='relative group flex items-center gap-1 text-[13px] font-semibold cursor-pointer'>
                                <Link href={'/category'} className='hover:text-orange-400'>SOFA</Link>

                                <ul className="flex  absolute min-w-[580px] px-[25px] pt-[30px] pb-[35px] bg-white border border-[#ebebeb]
                 [transform:perspective(600px)_rotateX(-90deg)] [transform-origin:0_0_0]
                 right-auto opacity-0 invisible
                 transition-all duration-500 z-[9] top-full text-left
                 group-hover:opacity-100 group-hover:visible 
                 group-hover:[transform:perspective(600px)_rotateX(0deg)] gap-10 justify-center">
                                    <li>
                                        <a className='font-bold text-[16px]'>Sofa Cum Bed</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px]'><Link href={"/categories"}>Wooden Sofa Cum Bed</Link></li>

                                        </ul>
                                    </li>
                                    <li>
                                        <a className='font-bold text-[16px]'>Sofa Sets</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">L Shape Sofa</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">1 Shape Sofa</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">2 Shape Sofa</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">3 Shape Sofa</a></li>
                                            <li className='py-[5px] text-gray-600 text-[15px]'><a href="#">4 Shape Sofa</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className='font-bold text-[16px]'>Swing Jhula</a>
                                        <ul className='py-3 text-gray-600'>
                                            <li className='py-[5px] text-gray-600 text-[15px]' ><a href="#">Wooden Jhula</a></li>
                                        </ul>
                                    </li>
                                </ul>

                                <FaAngleDown className='mt-[3px]' />


                            </li>
                            <li className='relative group flex items-center gap-1 text-[13px] font-semibold cursor-pointer'>
                                <div className='flex items-center gap-1 hover:text-orange-400'>
                                    <Link href={'/category'}>PAGES</Link>
                                    <FaAngleDown className='mt-[3px]' />
                                </div>


                                <ul className=" flex absolute min-w-[220px] pt-[30px] pb-[35px] bg-white border border-[#ebebeb]
                 [transform:perspective(600px)_rotateX(-90deg)] [transform-origin:0_0_0]
                 right-auto opacity-0 invisible
                 transition-all duration-500 z-[9] top-full text-left
                 group-hover:opacity-100 group-hover:visible 
                 group-hover:[transform:perspective(600px)_rotateX(0deg)] gap-10 justify-center">
                                    <li>

                                        <ul className=' py-3 text-gray-600'>
                                            <li className='py-[5px] px-[25px] text-gray-600 text-[15px] hover:bg-slate-100'><Link href={"/categories"}>About Us</Link></li>
                                            <li className='py-[5px] px-[25px] text-gray-600 text-[15px] hover:bg-slate-100'><Link href={"/categories"}>Cart</Link></li>
                                            <li className='py-[5px] px-[25px] text-gray-600 text-[15px] hover:bg-slate-100'><Link href={"/categories"}>Checkout</Link></li>
                                            <li className='py-[5px] px-[25px] text-gray-600 text-[15px] hover:bg-slate-100'><Link href={"/categories"}>Frequently Questions</Link></li>



                                        </ul>
                                    </li>
                                </ul>




                            </li>
                            <li className='text-[13px] hover:text-orange-400 font-semibold cursor-pointer py-5'>CONTACT US</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>



    )
}





