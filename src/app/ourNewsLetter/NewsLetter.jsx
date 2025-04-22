import React from 'react'

export default function NewsLetter() {
    return (

        <div className='w-full bg-[#eaeeee] my-24 border-t-[1px] border-[#f0f1f1]' data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <div className='max-w-[1280px] mx-auto py-14'>
                <div className='py-3 text-center text-3xl font-extrabold font-serif'>
                    <h2>Our Newsletter</h2>
                </div>

                <div className='text-center font-serif'>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                </div>

                <div className='flex justify-center items-center my-10 mx-auto'>
                    <input type="email" name='' placeholder='Enter your Email Address' className='rounded w-96' />
                    <button className='py-2 px-4 bg-[#c09578] hover:bg-[#46a2ed] font-bold text-white rounded text-[17px]'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}
