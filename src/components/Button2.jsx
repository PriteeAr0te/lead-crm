import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button2 = ({ text, arrow = false }) => {
    return (
        <button className='px-8 flex text-center items-center py-3 text-[#242424]/90 hover:text-black hover:shadow-lg rounded-lg bg-[#B3FC6A] font-semibold transition-all duration-500 text-lg cursor-pointer relative'>
            {text}
            {arrow && <ArrowRight size={24} className='ml-2' />}
        </button>
    )
}

export default Button2