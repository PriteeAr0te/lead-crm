import React from 'react'
import { Star } from 'lucide-react'

const TestimonialCard = ({ text, shareImg, rating, personImg, name, source }) => {
    return (
        <div className='max-w-[380px] min-h-[360px] rounded-lg shadow-lg bg-[#F9F0F8] p-5 py-6 flex flex-col'>
            <p>
                {text}
            </p>
            <div className='flex gap-4 items-center mt-4'>
                <span className='bg-white shadow-md p-1 rounded-lg'>
                    <img src={shareImg} alt="share" />
                </span>
                <span className='flex gap-1 items-center'>
                    {Array.from({ length: rating }, (_, index) => (
                        <Star key={index} className="fill-[#090F4E]" size={20} />
                    ))}
                </span>
            </div>

            <div className='mt-auto pt-4 border-t border-[#7A7A7A] author-sec'>
                <div className='flex gap-3 items-center'>
                    <img src={personImg} alt="person1" />
                    <div className='space-y-0.5'>
                        <p className='text-para font-semibold'>{name}</p>
                        <span className='text-para-90 font-normal text-sm'>{source}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TestimonialCard