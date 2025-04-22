"use client"
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "./cus.css"
import useAOS from "../hooks/useAOS";

export default function Custumers() {

    useAOS

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
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
    )
}
