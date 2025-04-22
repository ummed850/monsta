"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "flowbite-react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiWorld } from 'react-icons/bi';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { GoClock } from 'react-icons/go';
import useAOS from "@/app/hooks/useAOS";


export default function BestProject() {

    useAOS();



    const SampleNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute -top-[71px] right-0 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full "
                onClick={onClick}
            >
                <FaChevronRight />
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute -top-[71px] me-2 right-5 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full "
                onClick={onClick}
            >
                <FaChevronLeft />
            </div>
        );
    };

    var settings = {
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    centerPadding: 30,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className='flex justify-between max-w-[1280px] mx-auto py-5 before:max-w-[970px] before:ms-[462px]  before:border-slate-200 before:border-b-2 before:left-0 before:right-0 before:mt-5 before:absolute' >
                <h1 className='text-2xl font-serif font-semibold'>
                    Bestselling Products
                </h1>

            </div>

            <div className="max-w-[1280px] mx-auto my-10 overflow-visible" data-aos="zoom-out-down">
                <div className="slider-container gap-5">
                    <Slider {...settings}>
                        <div>
                            <SliderProduct />
                        </div>
                        <div>
                            <SliderProduct />
                        </div>
                        <div>
                            <SliderProduct />
                        </div>
                        <div>
                            <SliderProduct />
                        </div>
                        <div>
                            <SliderProduct />
                        </div>
                        <div>
                            <SliderProduct />
                        </div>
                        <div>
                            <SliderProduct />
                        </div>
                        <div>
                            <SliderProduct />
                        </div>
                    </Slider>
                </div>

            </div>

            <section className=" border-b border-[#ebebeb] my-14 bg-[#f8f9f9] pt-[70px] pb-[50px] py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="p-4 " data-aos="fade-right">
                            <div className="text-center gap-4">
                                <div className="text-4xl flex justify-center py-4 text-blue-600">
                                    <BiWorld className="border-[2px] w-20 h-20 p-5 hover:text-orange-400 text-2xl rounded-full border-black " />
                                </div>
                                <div className="">
                                    <h3 className="text-lg font-semibold mb-1">Free Shipping</h3>
                                    <p className="text-sm text-gray-600">Free shipping on all order</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 " data-aos="fade-up">
                            <div className="text-center gap-4">
                                <div className="flex justify-center py-4 text-4xl text-green-600">
                                    <FaRegCircleCheck className="border-[2px] hover:text-purple-700  w-20 h-20 p-5 text-2xl rounded-full border-black " />
                                </div>
                                <div className="">
                                    <h3 className="text-lg font-semibold mb-1">Money Return</h3>
                                    <p className="text-sm text-gray-600">Back guarantee under 7 days</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4" data-aos="fade-right">
                            <div className="text-center gap-4">
                                <div className="flex justify-center py-4 text-4xl text-yellow-600">
                                    <GoClock className="border-[2px] hover:text-sky-400  w-20 h-20 p-5 text-2xl rounded-full border-black " />
                                </div>
                                <div className="">
                                    <h3 className="text-lg font-semibold mb-1">Online Support</h3>
                                    <p className="text-sm text-gray-600">Support online 24 hours a day</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>

            </section>

        </div>
    )
}

function SliderProduct() {
    return (
        <Card
            className="max-w-[320px] mx-5 my-5 font-serif shadow-2xl"
            renderImage={() => <Image width={370} height={250} src="/images/fetured images/Caroline Study Tables__.jpg" alt="image 1" />}
        >
            <p className='text-center -space-y-10'>
                Nest Of Tables
            </p>
            <h5 className="text-[15px] text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                Caroline Study Tables
            </h5>

            <div className='flex justify-center gap-2'>
                <p className='line-through font-sans text-gray-500'>
                    Rs. 3,000
                </p>
                <p className='text-[16px] font-sans font-semibold text-orange-400'>
                    Rs. 2,500
                </p>
            </div>


            <div className='flex justify-center gap-3 items-center'>
                <p className="cursor-pointer w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                    <FaRegHeart />
                </p>

                <p className=' cursor-pointer h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                    Add To Cart
                </p>
            </div>
        </Card>
    )
}
