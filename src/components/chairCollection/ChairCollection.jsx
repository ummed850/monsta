"use client"
import useAOS from '@/app/hooks/useAOS';
import React, { useEffect } from 'react'



export default function ChairCollection() {

    useAOS();


    return (
        <div className='w-full border-b-[1px] border-gray-300'>
            <div className='max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mx-auto lg:mx-auto my-14'>
                <div className='relative h-80 w-96 overflow-hidden group' data-aos="flip-left">
                    <div className=" h-80 inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url('/images/yellowKurshi.webp')] bg-cover bg-center ">

                    </div>
                    <div className='absolute top-0 z-50 h-full' >
                        <p className='bg-opacity-50 text-1xl mt-10 ms-10'>
                            Design Creative
                        </p>
                        <span className='bg-opacity-50 text-3xl font-serif mt-10 ms-10'>
                            Chair Collection
                        </span>
                    </div>
                </div>


                <div className='relative h-80 w-96 overflow-hidden group' data-aos="flip-up">
                    <div className=" h-80 inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url('/images/Kurshi.webp')] bg-cover bg-center ">

                    </div>
                    <div className='absolute top-0 z-50 h-full'>
                        <p className='bg-opacity-50 text-1xl mt-10 ms-10'>
                            Bestselling Products
                        </p>
                        <span className='bg-opacity-50 text-3xl font-serif mt-10 ms-10'>
                            Chair Collection
                        </span>
                    </div>
                </div>


                <div className='relative h-80 w-96 overflow-hidden group' data-aos="flip-right">
                    <div className=" h-80 inset-0 transition-transform duration-500 group-hover:scale-110 bg-[url('/images/yellowKurshi.webp')] bg-cover bg-center ">

                    </div>
                    <div className='absolute top-0 z-50 h-full'>
                        <p className='bg-opacity-50 text-1xl mt-10 ms-10'>
                            Onsale Products
                        </p>
                        <span className='bg-opacity-50 text-3xl font-serif mt-10 ms-10'>
                            Chair Collection
                        </span>
                    </div>
                </div>

            </div>
        </div >
    )
}
