"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import CustomCard from "../components/custom_card";
import JargonAnimated from '../components/jargon_animated';

export default function AboutPage() {

    const herotext = [
        { id: 1, text: "Welcome to Keretas, where we partner with businesses to grow, thrive, and make their mark in today’s fast-paced digital landscape. From crafting stunning visuals to designing impactful campaigns, we’ve worked with brands across industries to strengthen their identity and expand their reach.s" },
        { id: 2, text: "At Keretas, we specialize in bringing ideas to life through creative design, strategic digital marketing, seamless web development, and innovative tech solutions. Whether it’s building a brand from scratch, like shaping the identity of a premium chocolate brand, or elevating a jewelry business during a high-profile collaboration, we approach every project with passion and purpose." },
        { id: 3, text: "Our process is simple but effective: we listen closely to understand your goals, collaborate to develop tailored strategies, and deliver solutions that drive real results." },
        { id: 4, text: "Let’s turn your vision into reality and take your brand to the next level—together!" },
    ];

    const portos = [
        { count: "7+", text: "Innovative team players" },
        { count: "10+", text: "Brands work with us" },
        { count: "6", text: "Campaign Running" },
    ]

    const services = [
        {
            id: '01',
            title: 'Design & Branding',
            description: 'Visually impactful designs, packaging, POSM, and branding to enhance identity and connect with audiences.',
            backgroundColor: 'bg-[#b2d8ca]',
            icon: '/icon_1.png', 
            iconPosition: 'top-left'
        },
        {
            id: '02',
            title: 'Digital Marketing',
            description: 'Social media management, campaigns, and content to boost online presence and foster customer loyalty.',
            backgroundColor: 'bg-[#fff6d1]',
            icon: '/icon_2.png', 
            iconPosition: 'bottom-right'
        },
        {
            id: '03',
            title: 'Web & App Development',
            description: 'User-friendly websites and apps with sleek design and seamless functionality for better engagement.',
            backgroundColor: 'bg-[#d8eef8]',
            icon: '/icon_3.png', 
            iconPosition: 'top-right'
        },
        {
            id: '04',
            title: 'Tech-Driven Solutions',
            description: 'Technology consultancy, tools, and platforms to drive efficiency and accelerate business growth.',
            backgroundColor: 'bg-[#ffd4b2]',
            icon: '/icon_4.png',
            iconPosition: 'bottom-left'
        }
    ];

    const features = [
        {
            title: "Creativity Meets Strategy",
            description: "We pride ourselves on blending creativity with strategic thinking to deliver marketing solutions that not only captivate audiences but also drive meaningful results for our clients.",
            image: "https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/677251e750c5119aa450a88f_1.png"
        },
        {
            title: "Client-Centric Approach",
            description: "Your success is our success. We take a client-centric approach, working closely with you to understand your unique needs and tailor our services to align with your specific objectives.",
            image: "https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/677251e722c7abf99b7068cf_3.png"
        },
        {
            title: "Expertise and Innovation",
            description: "With a team of seasoned professionals at the helm, we stay ahead of industry trends and technological advancements, ensuring that our clients benefit from the latest innovations in digital marketing.",
            image: "https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/677251e757fc4ed61cf601af_2.png"
        },
        {
            title: "Our Commitment",
            description: "When you choose Keretas, you're not just getting a service provider – you're gaining a dedicated partner committed to your success every step of the way.",
            image: "https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/677251e750b1aac8aefc768b_4.png"
        }
    ];


    return (
        <>
            {/* hero */}
            <section className="hero flex flex-col md:flex-row mx-4 md:mx-12 md:gap-9">
                <div className="md:basis-1/2 mt-5">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.4, delay: 3.5 }}
                    >
                        <h1 className="font-bold text-black text-3xl md:text-[85px] mb-2 md:mb-12 md:leading-24">Your trusted partner!</h1>
                    </motion.div>

                    {herotext.map((text, index) => (
                        <motion.p
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                ease: "easeIn", duration: 0.3, delay: 3.7
                            }}
                            className="max-w-2xl text-justify text-[16px] my-5 text-gray-500"
                        >
                            {text.text}
                        </motion.p>
                    ))}

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="py-4 mt-2 md:mt-5">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                            {portos.map((porto, index) => (
                                <div key={index}>
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-2 md:mb-4">
                                        {porto.count}
                                    </h3>
                                    <p className="text-black font-semibold text-xs md:text-sm">
                                        {porto.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="md:max-w-xl h-auto md:basis-1/2 md:flex order-last ml-0 md:ml-10 mt-6 md:mt-0">
                    <img
                        src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/6644fb3c50be69b589f1a7ec_About%2007%201.webp"
                        className="object-contain w-full"
                        alt="Hero"
                    />
                </div>
            </section>
            {/* content 2 */}
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
            {/* content 3 */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-0 md:mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                            What Sets Us Apart
                        </h2>
                    </div>
                    <div className="relative">
                        {features.map((feature, index) => (
                            <div key={index} className="group md:hover:bg-green-700 transition-colors duration-300 cursor-pointer relative">
                                <div className="border-b border-slate-200"></div>
                                <div className="flex flex-col lg:flex-row lg:items-start px-2 py-4 relative">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full lg:gap-8">
                                        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 md:group-hover:text-white mb-3 lg:mb-0 lg:min-w-[280px] leading-tight transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 md:group-hover:text-white text-base md:text-md leading-relaxed lg:max-w-[400px] transition-colors duration-300 mb-4 lg:mb-0">
                                            {feature.description}
                                        </p>
                                    </div>
                                    <div className="block lg:hidden mt-4">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-96 object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="hidden lg:block fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-50 pointer-events-none">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-80 h-auto object-cover shadow-2xl"
                                    />
                                </div>

                                <div className="border-b border-slate-200"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* content 4 */}
            <section className="min-h-32 bg-black relative overflow-hidden">
                <div className="bg-orange-500 py-4 h-32 overflow-hidden whitespace-nowrap flex">
                    <div className="flex items-center">
                        <span className="text-white text-4xl md:text-6xl font-bold flex items-center gap-4">
                            <img src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/65ae58f465086a5b55b30c7e_Vector%20(10).png" alt="" className="w-8 h-8" />
                            <h2 className="text-transparent stroke-1 stroke-white" style={{ WebkitTextStroke: '1px white' }}>BRANDING</h2>
                            <img src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/65ae58f465086a5b55b30c7e_Vector%20(10).png" alt="" className="w-8 h-8" />
                            <h2 className="text-transparent stroke-1 stroke-white" style={{ WebkitTextStroke: '1px white' }}>VISUAL DESIGN</h2>
                            <img src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/65ae58f465086a5b55b30c7e_Vector%20(10).png" alt="" className="w-8 h-8" />
                            <h2 className="text-transparent stroke-1 stroke-white" style={{ WebkitTextStroke: '1px white' }}>DIGITAL MARKETING</h2>
                            <img src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/65ae58f465086a5b55b30c7e_Vector%20(10).png" alt="" className="w-8 h-8" />
                            <h2 className="text-transparent stroke-1 stroke-white" style={{ WebkitTextStroke: '1px white' }}>BRANDING</h2>
                            <img src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/65ae58f465086a5b55b30c7e_Vector%20(10).png" alt="" className="w-8 h-8" />
                            <h2 className="text-transparent stroke-1 stroke-white" style={{ WebkitTextStroke: '1px white' }}>VISUAL DESIGN</h2>
                            <img src="https://cdn.prod.website-files.com/65ae58f365086a5b55b30a7d/65ae58f465086a5b55b30c7e_Vector%20(10).png" alt="" className="w-8 h-8" />
                            <h2 className="text-transparent stroke-1 stroke-white" style={{ WebkitTextStroke: '1px white' }}>DIGITAL MARKETING</h2>
                        </span>
                    </div>
                </div>


                <JargonAnimated />


            </section>

        </>
    )
}
