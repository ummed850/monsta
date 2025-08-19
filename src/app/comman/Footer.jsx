"use client"
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaTelegramPlane } from 'react-icons/fa';



export default function Footer() {
    return (
        <div className='w-full'>
            <div className='max-w-[1480px] py-16 mx-auto border-b border-gray-200'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 '>
                    <div >
                        <div>
                            <h2 className='text-2xl font-bold font-serif py-7'>
                                Contact Us
                            </h2>

                            <div className='text-sm font-normal font-sans'>
                                <p className='py-2'>
                                    Address: Claritas est etiam processus dynamicus
                                </p>
                                <p>Phone: <a href="tel:9781234560">9781234560</a></p>
                                <p className='py-2'>Email: <a href="mailto:Ummedprajapat0987@gmail.com"> Ummedprajapat0987@gmail.com  </a> </p>
                            </div>

                            <div className='logo flex gap-2 text-[20px] my-3'>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className='border-[2px] text-[#959494] border-[gray] hover:border-[ccc] rounded-full w-11 h-11 p-3 hover:text-[rgb(192,149,120)]' />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='border-[2px] text-[gray] border-[gray] hover:border-[rgb(192,149,120)] rounded-full w-11 h-11 p-3 hover:text-[rgb(192,149,120)]' />
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className='border-[2px] text-[gray] border-[#929292] hover:border-[rgb(192,149,120)] rounded-full w-11 h-11 p-3 hover:text-[rgb(192,149,120)]' />
                                </a>
                                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className='border-[2px] text-[gray] border-[gray] hover:border-[rgb(192,149,120)] rounded-full w-11 h-11 p-3 hover:text-[rgb(192,149,120)]' />
                                </a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className='border-[2px] text-[gray] border-[gray] hover:border-[rgb(192,149,120)] rounded-full w-11 h-11 p-3 hover:text-[rgb(192,149,120)]' />
                                </a>
                                <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                                    <FaTelegramPlane className='border-[2px] text-[gray] border-[gray] hover:border-[rgb(192,149,120)] rounded-full w-11 h-11 p-3 hover:text-[rgb(192,149,120)]' />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='max-w-[300px] '>
                        <div>
                            <h2 className='text-2xl font-bold font-serif py-7'>
                                Information
                            </h2>
                        </div>
                        <div className='font-medium text-[#808080]'>
                            <Link href={'/details-page/about-us'}>  <p className='py-1 hover:bg-gray-200 hover:text-[rgb(192,149,120)]'>About Us</p> </Link>
                            <p className='py-1 hover:bg-gray-200 hover:text-[rgb(192,149,120)]'>Contact Us</p>
                            <p className='py-1 hover:bg-gray-200 hover:text-[rgb(192,149,120)]'>Frequently Questions</p>
                        </div>
                    </div>
                    <div className='max-w-[200px] '>
                        <div>

                            <h2 className='text-2xl font-bold font-serif py-7'>My Account</h2>
                        </div>
                        <div>
                            <div className='font-medium text-[#808080]'>
                                <Link href={'/details-page/dashboard-profile'}>  <p className='py-1 hover:bg-gray-200 hover:text-[rgb(192,149,120)] w-40'>My Dashboard</p> </Link>
                                <Link href={'/details-page/wishlist'}>  <p className='py-1 hover:bg-gray-200 hover:text-[rgb(192,149,120)] w-40'>Wishlist</p> </Link>
                                <Link href={'/details-page/cart'}> <p className='py-1 hover:bg-gray-200 hover:text-[rgb(192,149,120)] w-40'>Cart</p></Link>
                                <Link href={'/details-page/checkout'}> <p className='py-1 hover:bg-gray-200 hover:text-[rgb(192,149,120)] w-40'>Checkout
                                </p></Link>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            <h2 className='text-2xl font-bold font-serif py-7'>
                                Top Rated Products
                            </h2>

                            <div className='' >
                                <div className='flex gap-4'>
                                    <div>
                                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg" alt="" width={90} />
                                    </div>
                                    <div>
                                        <p>
                                            1 Seater Sofa
                                        </p>
                                        <p className='text-[18px] font-serif text-purple-500'>Yuvi sheesham wood sofa set</p>
                                    </div>
                                </div>
                                <div className='flex justify-center gap-3 border-b-2'>
                                    <p className='line-through font-sans text-gray-500'> Rs. 10,000 </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400 pb-3'>Rs. 7,600</p>
                                </div>
                            </div>

                            <div className='' >
                                <div className='flex gap-4'>
                                    <div>
                                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg" alt="" width={90} />
                                    </div>
                                    <div>
                                        <p>
                                            Side and End Tables
                                        </p>
                                        <p className='text-[18px] font-serif text-purple-500'>Hrithvik Stool</p>
                                    </div>
                                </div>
                                <div className='flex justify-center gap-3 border-b-2'>
                                    <p className='line-through font-sans text-gray-500'> Rs. 7,000 </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>Rs. 6,000</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <div className='max-w-[1480px] mx-auto my-5 border-b pb-3'>
                <ul className='text-xl flex justify-center gap-10'>
                    <Link href={'/'}> <li className='text-gray-500 hover:text-[#908048]'>Home</li> </Link>
                    <li className='text-gray-500 hover:text-[#908048]'>Online Store</li>
                    <li className='text-gray-500 hover:text-[#908048]'>Privacy Policy</li>
                    <li className='text-gray-500 hover:text-[#908048]'>Terms of Use</li>
                </ul>
            </div>

            <div className='text-center my-5'>
                <p className='text-gray-500 hover:text-[#908048]'>All Rights Reserved By Furniture | © 2025</p>
                <div className='flex justify-center py-4 pb-7'>
                    <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png" alt="" width={250} />
                </div>
            </div>
        </div>
    )
}
