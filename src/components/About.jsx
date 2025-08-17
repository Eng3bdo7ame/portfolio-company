import React from 'react'
import Button from './Button'


export default function About() {
    return (
        <section class="py-24 relative">
            <div class="w-full ">
                <div class="w-full justify-start items-center grid lg:grid-cols-2 grid-cols-1">
                    <div
                        class="w-full justify-center items-start  lg:order-first order-last">

                        <img class="w-full sm:ml-0 ml-auto rounded-xl object-cover" src="/images/HomeAbout.svg"
                            alt="about Us image" />
                    </div>
                    <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div class="w-full flex-col justify-center items-start gap-8 flex">
                            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    class="text-[40px] leading-[26px] tracking-[2px] text-gray-900  font-bold font-manrope  lg:text-start text-center">
                                    Because safety isn’t a choice.</h2>
                                <p class="text-[#343F43]  text-[18px] leading-[26px] tracking-[0.02em] w-[671px] h-[156px] align-middle opacity-100">
                                    Born in Abu Dhabi in 2017, Home Hunters creates living spaces that don’t just react, they anticipate, From smart home automation to ELV systems and AI-powered security, our tech doesn’t just follow trends, it sets them, With a team of engineers, consultants, and visionary designers, we blend intelligence and innovation to bring you homes that respond, adapt, and protect, instantly.
                                </p>

                            </div>

                        </div>
                        <Button btnContent="Learn More About Us " />
                    </div>
                </div>
            </div>
        </section>

    )
}
