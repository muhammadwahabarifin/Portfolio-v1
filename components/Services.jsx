import React from 'react'
import { Wand2, MonitorSmartphone, Smartphone } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card'

const servicesData = [
    {
        icon: <Wand2 size={72} strokeWidth={0.8} />,
        title: "Web Design",
        description:
            "I create beautiful and functional web designs for your brand and vision ",
    },
    {
        icon: <MonitorSmartphone size={72} strokeWidth={0.8} />,
        title: "Web Development",
        description:
            "I build fast and secure web applications, using the latest tools and technologies. ",
    },
    {
        icon: <Smartphone className="  " size={72} strokeWidth={0.8} />,
        title: "App Development",
        description:
            "I develop high-quality native and cross-platform apps for iOS and Android, using the best practices and frameworks.",
    },
];

const Services = () => {
    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto bg-gradient-to-r from-orange-600 to-orange-200 bg-clip-text text-transparent'>
                    My Services
                </h2>
                {/* grid items */}
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {servicesData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-18 justify-center items-center relative'
                            >
                                <CardHeader className='text-primary absolute -top-[60px]'>
                                    <div className='w-[140px] h-[90px] bg-white dark:bg-background flex justify-center items-center'>
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                                    <CardDescription className='text-lg'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
