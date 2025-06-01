"use client";

import { Button } from "@headlessui/react";
import { motion } from "framer-motion";
import CustomCard from "../components/custom_card";
import FormContact from "../components/form_contact";
import TestimonialSlider from "../components/testimonial_slider";


const services = [
    {
        id: '01',
        title: 'Design & Branding',
        description: 'Visually impactful designs, packaging, POSM, and branding to enhance identity and connect with audiences.',
        backgroundColor: 'bg-[#b2d8ca]',
        icon: '/icon_1.png', // design icon
        iconPosition: 'top-left'
    },
    {
        id: '02',
        title: 'Digital Marketing',
        description: 'Social media management, campaigns, and content to boost online presence and foster customer loyalty.',
        backgroundColor: 'bg-[#fff6d1]',
        icon: '/icon_2.png', // marketing icon
        iconPosition: 'bottom-right'
    },
    {
        id: '03',
        title: 'Web & App Development',
        description: 'User-friendly websites and apps with sleek design and seamless functionality for better engagement.',
        backgroundColor: 'bg-[#d8eef8]',
        icon: '/icon_3.png', // web development icon
        iconPosition: 'top-right'
    },
    {
        id: '04',
        title: 'Tech-Driven Solutions',
        description: 'Technology consultancy, tools, and platforms to drive efficiency and accelerate business growth.',
        backgroundColor: 'bg-[#ffd4b2]',
        icon: '/icon_4.png', // web development icon
        iconPosition: 'bottom-left'
    }
]

const contacts = [
    {
        name: "address", value: "Equity Tower, 49th Floor Jl.Jend.Sudirman Kav. 52–53 SCBD, Jakarta Selatan 12190", color: "bg-[#ffc715]"
    },
    {
        name: "email", value: "Email: hello@keretas.id", color: "bg-orange-500"
    },
    {
        name: "phone", value: `Nomor Telp: 021 2965 1196\n Whatsapp: 0877 8414 0311`, color: "bg-green-700"
    },
]


export default function Homepage() {

    return (
        <>
            {/* hero */}
            <section className="hero flex flex-row mx-4 md:mx-12 md:gap-9">
                <div className="md:basis-1/2 mt-12">
                    <motion.div
                        // whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.4, delay: 3.5 }}
                    >
                        <h1 className="font-bold text-black text-5xl md:text-[85px] mb-5 md:mb-14 md:leading-24" >Grow beyond limits with us</h1>
                    </motion.div>
                    <motion.p
                        // whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeIn", duration: 0.3, delay: 3.7
                        }}
                        className="max-w-2xl text-justify text-[20px] text-gray-500">Keretas crafts tailored strategies across creative design, digital marketing, web development, and tech-driven solutions to elevate your brand and drive targeted growth. Experience innovation and customization with us.</motion.p>
                    <motion.button
                        // whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.4, delay: 3.7 }}
                        onClick="" className="rounded-full bg-green-700 text-white h-14 w-36 mt-10 text-[20px] font-semibold mb-5">
                        Let's Talk
                    </motion.button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12%" viewBox="0 0 71 36" fill="none" className="hero-background-left-bottom"><path d="M59.205 11.7929C61.4042 13.807 64.5372 13.365 66.7757 11.0081C69.0143 8.65125 68.5654 4.96372 65.9693 3.43967C63.3733 1.91562 60.5107 1.9698 58.3986 4.22449C56.2866 6.47917 57.0058 9.77887 59.205 11.7929Z" fill="#2460A3" className="svg-color blue"></path><path d="M46.5109 19.9024C42.8323 21.279 41.4776 25.2199 42.905 29.2562C44.3323 33.2926 48.9282 34.9708 52.2691 32.8355C55.6099 30.7002 57.258 27.3084 55.875 23.4816C54.4919 19.6548 50.1895 18.5258 46.5109 19.9024Z" fill="#FF6F00" className="svg-color orange"></path><path d="M-2.69692e-06 18.0633C-3.14999e-06 28.4283 8.03437 36 17.9453 36C27.8562 36 37.116 27.2107 35.8905 18.0633C34.6651 8.91588 28.7801 -1.25407 17.9453 0.126599C7.11044 1.50727 -2.24385e-06 7.6983 -2.69692e-06 18.0633Z" fill="#FFC715" className="svg-color yellow"></path></svg>
                </div>
                <div className="md:max-w-xl md:basis-1/2 hidden md:flex ml-7">
                    <img src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/6642eb4380e3978b129786b1_Hero%20Image.svg" alt="Hero" />
                </div>
            </section >
            {/* content-2 */}
            <section className="py-20 md:py-32">
                <div className="flex justify-center">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="max-w-6xl text-center text-black md:font-semibold font-bold text-xl md:text-7xl">We empower businesses to excel in the digital landscape.</motion.h1>
                </div>
                <div className="mt-5 md:mt-20 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <CustomCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.description}
                            backgroundColor={service.backgroundColor}
                            icon={service.icon}
                            chartData={service.chartData}
                            iconPosition={service.iconPosition}
                            className="h-[450px]"
                            iconSize={110}
                            delay={0.3}
                            duration={0.8}
                        />
                    ))}
                </div>
            </section>
            {/* content-3 */}
            <section className="bg-black md:mt-20 h-auto py-10 md:py-20">
                <div className="md:flex justify-between items-center mx-5 md:mx-40 gap-8">
                    <div className="flex-1">
                        <motion.h2
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false }}
                            className="text-3xl md:text-5xl md:leading-15 font-semibold text-[#ffc715]">
                            Crafting marketing magic together
                        </motion.h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-200 text-sm md:text-lg mt-5 md:mt-0">
                            Keretas believes success starts with the human touch, fostering deep connections between brands and people through a blend of intuition and strategy. Our approach spans both digital and traditional media, building meaningful relationships at every touchpoint.
                        </p>
                    </div>
                </div>
                <div className="py-8 md:py-12 mt-6 md:mt-10 px-4 sm:px-8 md:px-20 lg:px-40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                        {/* Stat 1 */}
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">7+</h3>
                            <p className="text-white text-sm sm:text-base md:text-lg">Innovative team players</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">10+</h3>
                            <p className="text-white text-sm sm:text-base md:text-lg">Brands work with us</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">100+</h3>
                            <p className="text-white text-sm sm:text-base md:text-lg">Content Created</p>
                        </div>

                        {/* Stat 4 */}
                        <div className="text-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">6+</h3>
                            <p className="text-white text-sm sm:text-base md:text-lg">Campaign Running</p>
                        </div>
                    </div>
                </div>
            </section>
            <img src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/6642eeef101e7f33e06c5b4f_square%20divider.svg" alt="" />
            {/* content-4 */}
            <section className="h-auto bg-white">
                <div className="py-12 md:py-20 flex justify-center items-center px-4 md:px-8">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="max-w-4xl text-center font-bold md:font-semibold text-2xl md:text-5xl lg:text-7xl text-gray-900">
                        What our lovely clients have to say.
                    </motion.h1>
                </div>
                <div className="pb-12 md:pb-20">
                    <TestimonialSlider />
                </div>
            </section>
            {/* content-5 */}
            <section className="h-auto bg-white">
                <div className="py-12 md:py-20 flex justify-center items-center px-4 md:px-8">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="max-w-4xl text-center font-bold md:font-semibold text-2xl md:text-5xl lg:text-7xl text-gray-900">
                        Contact Us
                    </motion.h1>
                </div>

                {/* Fixed Layout Container */}
                <div className="max-w-full justify-between pb-12 md:pb-20">
                    <div className="flex md:flex-col lg:flex-row gap-8 items-start">
                        {/* Form Container */}
                        <div className="w-full md:ml-32 lg:max-w-2xl relative">
                            {/* Background Image - Only visible on mobile, behind form */}
                            <div
                                className="absolute inset-0 lg:hidden bg-contain bg-center bg-no-repeat opacity-20 pointer-events-none"
                                style={{
                                    backgroundImage: "url('https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/6642f000f47e83613ff3283b_graphic-4.svg')"
                                }}
                            ></div>

                            {/* Form Content - Solid, no transparency */}
                            <FormContact />

                        </div>


                        {/* Image Container - Only visible on desktop */}
                        <div className="hidden md:flex w-full lg:justify-end items-end">
                            <img
                                className="h-auto w-full max-w-lg lg:max-w-2xl object-contain"
                                src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/6642f000f47e83613ff3283b_graphic-4.svg"
                                alt="Contact illustration"
                            />
                        </div>

                    </div>
                    <div className="my-10 mx-4 md:mx-20">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full content-center justify-between h-auto px-5 md:p-8 rounded-lg">
                            {/* Contact Item 1 */}
                            {contacts.map((contact) => (
                                <div key={contact.name} className="flex flex-row gap-8 items-center flex-1">
                                    <div className={`w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rotate-45 ${contact.color} flex-shrink-0`}></div>
                                    <p className="text-black text-sm md:text-base leading-relaxed whitespace-pre-line">
                                        {contact.value}
                                    </p>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}