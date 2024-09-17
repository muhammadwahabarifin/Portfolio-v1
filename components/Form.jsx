'use client';

import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react';
import { Input } from './ui/input'
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const Form = () => {
    return (
        <form
            action="https://formspree.io/f/moqgqqng"
            className="flex flex-col gap-y-4"
            method="POST"
        >
            {/* input */}
            <div className="relative flex items-center">
                <Input type='name' id='name' placeholder='name' />
                <User className='absolute right-6' size={20} />
            </div>
            {/* input */}
            <div className='relative flex items-center'>
                <Input type='email' id='email' name='email' placeholder='Email' />
                <MailIcon className='absolute right-6' size={20} />
            </div>
            {/* input */}
            <div className='relative flex items-center'>
                <Textarea
                    id='message'
                    name='message'
                    placeholder='Type your message here'
                />
                <MessageSquare className='absolute top-4 right-6' size={20} />
            </div>
            <Button type='submit' className='flex items-center gap-x-1 max-w-[166px]'>
                Let's  Talk <ArrowRightIcon size={20} />
            </Button>
        </form>
    )
}

export default Form;