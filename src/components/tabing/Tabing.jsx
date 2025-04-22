"use client"
import React from 'react'
import { Tabs } from "flowbite-react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function Tabing() {

    return (
        <div className='max-w-[1280px] mx-auto my-5' data-aos="flip-up">
            <Tabs variant="pills" className='flex justify-center'>
                <Tabs.Item active title="Fetured" className=''>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <div className='grid grid-cols-4 gap-5'>

                            <Card
                                className="max-w-[350px] font-serif shadow-2xl"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/Caroline Study Tables__.jpg" alt="image 1" className='' />}
                            >
                                <p className='text-center'>
                                    Nest Of Tables
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
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

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/2nd.jpg" alt="image 2" className='' />}
                            >
                                <p className='text-center'>
                                    Coffee Tables
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Evan Coffee Table
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 2,600
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 2,300
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className=" cursor-pointer w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='cursor-pointer h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/3rd.jpg" alt="image 3" className='' />}
                            >
                                <p className='text-center'>
                                    Shoe Racks
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Gloria Shoe Racks
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 3,400
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 2,900
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="cursor-pointer w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='cursor-pointer h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/4rth.jpg" alt="image 4" className='' />}
                            >
                                <p className='text-center'>
                                    Bookshelves
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Erica Bookshelfs
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 38,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 30,000
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/5th.jpg" alt="image 5" className='' />}
                            >
                                <p className='text-center'>
                                    Wooden Sofa Cum Bed
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Sapien Sofa Cum Bed
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 64,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 54,000
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/6th.jpg" alt="image 6" className='' />}
                            >
                                <p className='text-center'>
                                    2 Seater Sofa
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Ganthur Sheesham Wood Sofa Set
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 8,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 7,600
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/7th.jpg" alt="image 7" className='' />}
                            >
                                <p className='text-center'>
                                    Wooden Jhula
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Calina Swing Jhula
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 65,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 58,000
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>



                        </div>
                    </p>
                </Tabs.Item>
                <Tabs.Item title="New Arrivels">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <div className='grid grid-cols-4 gap-5'>

                            <Card
                                className="max-w-[350px] font-serif shadow-2xl"
                                renderImage={() => <Image width={350} height={280} src="/images/arrivels images/1st.jpg" alt="image 1" className='' />}
                            >
                                <p className='text-center'>
                                    Side and End Tables
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Hrithvik Stool
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 7,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 6,000
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

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/arrivels images/2nd.jpg" alt="image 2" className='' />}
                            >
                                <p className='text-center'>
                                    Coffee Table Sets
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Godfrey Coffee Table Set
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 3,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 2,200
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className=" cursor-pointer w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='cursor-pointer h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/arrivels images/3rd.jpg" alt="image 3" className='' />}
                            >
                                <p className='text-center'>
                                    Display Unit
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Dorian Shoe Rack
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 3,500
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 2,800
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="cursor-pointer w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='cursor-pointer h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/arrivels images/4th.jpg" alt="image 4" className='' />}
                            >
                                <p className='text-center'>
                                    Bookshelves
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Erica Bookshelfs
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 38,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 30,000
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/5th.jpg" alt="image 5" className='' />}
                            >
                                <p className='text-center'>
                                    Wooden Sofa Cum Bed
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Sapien Sofa Cum Bed
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 64,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 54,000
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/6th.jpg" alt="image 6" className='' />}
                            >
                                <p className='text-center'>
                                    2 Seater Sofa
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Ganthur Sheesham Wood Sofa Set
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 8,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 7,600
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/7th.jpg" alt="image 7" className='' />}
                            >
                                <p className='text-center'>
                                    Wooden Jhula
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Calina Swing Jhula
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 65,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 58,000
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>



                        </div>
                    </p>
                </Tabs.Item>
                <Tabs.Item title="Onsale">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        <div className='grid grid-cols-4 gap-5'>

                            <Card
                                className="max-w-[350px] font-serif shadow-2xl"
                                renderImage={() => <Image width={350} height={280} src="/images/onsale images/1st.jpg" alt="image 1" className='' />}
                            >
                                <p className='text-center'>
                                    Side and End Tables
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Hrithvik Stool
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 7,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 6,000
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

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/onsale images/2nd.jpg" alt="image 2" className='' />}
                            >
                                <p className='text-center'>
                                    Coffee Table Sets
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Godfrey Coffee Table Set
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 3,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 2,200
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className=" cursor-pointer w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='cursor-pointer h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/arrivels images/3rd.jpg" alt="image 3" className='' />}
                            >
                                <p className='text-center'>
                                    Display Unit
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Dorian Shoe Rack
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 3,500
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 2,800
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="cursor-pointer w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='cursor-pointer h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/arrivels images/4th.jpg" alt="image 4" className='' />}
                            >
                                <p className='text-center'>
                                    Bookshelves
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Erica Bookshelfs
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 38,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 30,000
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/5th.jpg" alt="image 5" className='' />}
                            >
                                <p className='text-center'>
                                    Wooden Sofa Cum Bed
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Sapien Sofa Cum Bed
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 64,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 54,000
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                            <Card
                                className="max-w-[350px] shadow-2xl font-serif"
                                renderImage={() => <Image width={350} height={280} src="/images/fetured images/6th.jpg" alt="image 6" className='' />}
                            >
                                <p className='text-center'>
                                    2 Seater Sofa
                                </p>
                                <h5 className="text-xl text-center border-b-[1px] border-gray-100 pb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    Ganthur Sheesham Wood Sofa Set
                                </h5>

                                <div className='flex justify-center gap-2'>
                                    <p className='line-through font-sans text-gray-500'>
                                        Rs. 8,000
                                    </p>
                                    <p className='text-[16px] font-sans font-semibold text-orange-400'>
                                        Rs. 7,600
                                    </p>
                                </div>


                                <div className='flex justify-center gap-3 items-center'>
                                    <p className="w-10 h-8 font-bold bg-gray-100 py-2 px-3 hover:bg-orange-300">
                                        <FaRegHeart />
                                    </p>

                                    <p className='h-8 bg-gray-100 py-2 px-3 hover:bg-orange-300'>
                                        Add To Cart
                                    </p>
                                </div>
                            </Card>

                        </div>
                    </p>
                </Tabs.Item>


            </Tabs>
        </div>
    )
}




