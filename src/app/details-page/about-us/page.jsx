"use client"
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Smile, Home, Headset } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";




export default function page() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div>
            <div>
                <div className='bg-[linear-gradient(120deg,_#a6c0fe_0%,_#f68084_100%)] border-y-2 border-gray-500 py-3'>
                    <div className='text-center text-white text-4xl font-bold font-serif mt-14'>
                        <h1>About Us</h1>
                    </div>

                    <div className='max-w-[100%] mx-auto flex justify-center items-center gap-2 text-xl py-5'>
                        <Link href={"/"}> <p className='hover:text-white cursor-pointer text-[25px]'>Home</p></Link>
                        <FaChevronRight className='hover:text-white mt-2 cursor-pointer' />
                        <p className='hover:text-white cursor-pointer text-[25px]'> About Us</p>
                    </div>
                </div>

                <div className='max-w-[1420px] mx-auto'>
                    <div>
                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg" className='my-12 max-w-[1380px] mx-auto h-[600px] object-cover' alt="" />
                    </div>

                    <div>
                        <h1 className='text-center text-3xl font-bold font-serif py-2'>Welcome to Monsta!</h1>
                        <p className='text-gray-600'>
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non
                            <p className='text-gray-600 text-center'> habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>
                        </p>
                        <p className='text-orange-400 text-[14px] text-center font-serif my-5'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
                    </div>

                    <div>
                        <section className="py-16 bg-gray-50">
                            <div className="container mx-auto px-4">
                                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    {/* Creative Design Card */}
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-4">
                                            <Smile className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Creative Design</h3>
                                        <p className="text-gray-600">
                                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim.
                                        </p>
                                    </div>

                                    {/* 100% Money Back Guarantee Card */}
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-4">
                                            <Home className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Money Back Guarantee</h3>
                                        <p className="text-gray-600">
                                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim.
                                        </p>
                                    </div>

                                    {/* Online Support 24/7 Card */}
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-4">
                                            <Headset className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Online Support 24/7</h3>
                                        <p className="text-gray-600">
                                            Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim.
                                        </p>
                                    </div>
                                </div>

                                {/* Second Row of Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                                    {/* What Do We Do? Card */}
                                    <div className="text-center">
                                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg" className="mx-auto mb-4 rounded" width={300} alt="" />
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">What Do We Do?</h3>
                                        <p className="text-gray-600">
                                            Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                                        </p>
                                    </div>

                                    {/* Our Mission Card */}
                                    <div className="text-center">
                                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg" className="mx-auto mb-4 rounded" width={300} alt="" />
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                                        <p className="text-gray-600">
                                            Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                                        </p>
                                    </div>

                                    {/* History Of Us Card */}
                                    <div className="text-center">
                                        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg" className="mx-auto mb-4 rounded" width={300} alt="" />
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">History Of Us</h3>
                                        <p className="text-gray-600">
                                            Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div>
                        <div className="max-w-[1280px] mx-auto my-32" data-aos="flip-up">

                            <div className="text-center">
                                <h2 className='pb-4 my-5 font-bold text-3xl'>What Our Custumers Say ?</h2>
                            </div>

                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className="">
                                        <div className="text-center text-[#817272] leading-normal">
                                            <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support <br /> team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        </div>

                                        <div className="flex justify-center py-7">
                                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" alt="image" />
                                        </div>

                                        <div className="text-center text-[#090505] leading-7 ">
                                            <span className="font-serif uppercase">Kathy Young</span>
                                            <p className="py-4 text-[#817272]">CEO of SunPark</p>
                                        </div>

                                        <div className="flex justify-center py-3 gap-2 text-[#c09578]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="text-center text-[#817272] leading-normal">
                                            <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support <br /> team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        </div>

                                        <div className="flex justify-center py-7">
                                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" alt="image" />
                                        </div>

                                        <div className="text-center text-[#090505] leading-7 ">
                                            <span className="font-serif uppercase">Kathy Young</span>
                                            <p className="py-4 text-[#817272]">CEO of SunPark</p>
                                        </div>

                                        <div className="flex justify-center py-3 gap-2 text-[#c09578]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="text-center text-[#817272] leading-normal">
                                            <p>These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support <br /> team ever! Very fast responding! Thank you very much! I highly recommend this theme and these people!</p>
                                        </div>

                                        <div className="flex justify-center py-7">
                                            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" alt="image" />
                                        </div>

                                        <div className="text-center text-[#090505] leading-7 ">
                                            <span className="font-serif uppercase">Kathy Young</span>
                                            <p className="py-4 text-[#817272]">CEO of SunPark</p>
                                        </div>

                                        <div className="flex justify-center py-3 gap-2 text-[#c09578]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>


                                </Slider>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
