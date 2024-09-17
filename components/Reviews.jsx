'use client';

import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

const reviewsData = [
    {
        avatar: "/reviews/avatar-2.png",
        name: " Gaurav Nagoge",
        job: "Python Developer",
        review:
            "He elevated our project with stellar React development. Their attention to detail and commitment to quality",
    },
    {
        avatar: "/reviews/avatar-1.png",
        name: " Utkarsh Gayakwad",
        job: "Entrepreneur",
        review:
            "Prem brings a wealth of knowledge to projects. their versatility ensures a holistic approach.",
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "Labhansh Satpute",
        job: "Backend Engineer",
        review:
            "His frontend skill is impressive! Their React skills shine in creating seamless and responsive design",
    },
    {
        avatar: "/reviews/avatar-4.png",
        name: " Emily Smith",
        job: "Therapist",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
    },
    {
        avatar: "/reviews/avatar-3.png",
        name: " John Doe ",
        job: " Game Developer",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
    },
    {
        avatar: "/reviews/avatar-6.png",
        name: " Evelyn Anderson",
        job: "interior designer",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, molestiae! Expedita, numquam quos!",
    },
];


const Reviews = () => {
    return (
        <section className='mb-12 xl:mb-32'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 text-center mx-auto bg-gradient-to-r from-orange-600 to-orange-200 bg-clip-text text-transparent'>Reviews</h2>
                {/* slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className='h-[350px]'
                >
                    {reviewsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className='flex items-center gap-x-4'>
                                            {/* image */}
                                            <Image
                                                src={person.avatar}
                                                width={70}
                                                height={70}
                                                alt='person'
                                                priority
                                            />
                                            {/* name */}
                                            <div className='flex flex-col'>
                                                <CardTitle className='pt-1'>{person.name}</CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default Reviews;
