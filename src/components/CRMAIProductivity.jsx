import { ChevronRight } from 'lucide-react'
import React from 'react'
import Comments from '../assets/img/comment.png'
import Shortcuts from '../assets/img/shortcuts.png'

const CRMAIProductivity = () => {
  return (
    <section className='w-fill max-w-7xl mx-auto mt-4'>
      <div className='w-full flex gap-2 items-start mb-4'>
        <p className='text-para'>
          Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.
        </p>
        <span className='text-xs text-danger p-1 rounded-xl bg-[#FFDCD4]'>
          No Smart Assistance
        </span>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='bg-[#FFE9FE] w-full md:w-[48%] rounded-lg px-4 py-5'>
          <h4 className='text-xl font-semibold text-[#262626] mb-2'>
            Get the same high-impact engagement in 80% less time.
          </h4>
          <a href='#' className='text-green font-medium flex gap-2 items-center transition-all duration-300 hover:opacity-80 cursor-pointer'>
            Try LeadCRM AI Response <ChevronRight />
          </a>

          <div className='mt-4'>
            <img src={Comments} alt="Add Comments" />
          </div>

        </div>
        <div className='bg-[#FFE9FE] w-full md:w-[48%] rounded-lg px-4 py-5'>
          <h4 className='text-xl font-semibold text-[#262626] mb-2'>
            Use Shortcuts to reply faster.
          </h4>
          <a href='#' className='text-green font-medium flex gap-2 items-center transition-all duration-300 hover:opacity-80 cursor-pointer'>
            Try LeadCRM Templates <ChevronRight />
          </a>
          <div className='mt-4'>
            <img src={Shortcuts} className='rounded-lg' alt="Use Shortcuts" />
          </div>

        </div>
      </div>

    </section>
  )
}

export default CRMAIProductivity