import React from 'react'

export default function ShopingNow() {
    return (
        <div className='w-[100%]' data-aos="zoom-in">
            <div className="my-10 h-[500px] bg-[url('/images/centerimg.jpg')] bg-cover bg-center ">

                <div className='w-[850px] transition-transform duration-500 hover:scale-105' data-aos="zoom-in-right">
                    <p className='pt-40 ps-40 font-semibold text-5xl font-serif'>
                        New Trending Collection
                    </p>
                    <p className='pt-4 ps-40 text-xl'>
                        We Believe That Good Design is Always in Season
                    </p>

                    <button className='my-10 uppercase ms-40 hover:bg-[#c09578] text-[#c09578] hover:text-white py-3 px-8 text-sm font-semibold border-[1px] border-[#c09578] font-sans'>
                        Shopping Now
                    </button>
                </div>

            </div>
        </div>
    )
}
