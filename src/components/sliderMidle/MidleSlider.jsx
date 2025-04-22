"use client";
import { Carousel } from "flowbite-react";
import React from 'react'
import './banner.css'

export default function MidleSlider() {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-[450px]" data-aos="fade-up">
                <Carousel pauseOnHover indicators
                    slide={true}
                    slideInterval={2000}
                    slideTransition="slide"
                    slideSpeed={1000}
                >
                    <img src="./images/1stslider.jpg" alt="..." />
                    <img src="./images/2stslider.jpg" alt="..." />
                    <img src="./images/3stslider.jpg" alt="..." />
                </Carousel>
            </div>
        </div>
    )
}
