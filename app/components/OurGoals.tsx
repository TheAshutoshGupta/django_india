import React from 'react'
import {  DollarSign, Zap, Moon, Filter } from 'lucide-react'

const features = [
  {
    Icon: DollarSign,
    title: 'first',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    Icon: Zap,
    title: 'Second',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    Icon: Moon,
    title: 'Third',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    Icon: Filter,
    title: 'Fourth',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
];

type FeatureBlockProps = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: string,
    description: string
  }
  
  const FeatureBlock: React.FC<FeatureBlockProps> = ({ Icon, title, description }) => (
  <div className='flex justify-center items-center flex-row gap-6 md:gap-0 md:flex-col'>
    <div className="mx-auto flex shrink-0 h-14 w-14 md:h-20 md:w-20 hover:scale-105 items-center justify-center rounded-full hover:bg-[#0F4C37] transition duration-300 bg-[#44B78B]">
      <Icon className="md:h-9 md:w-9 w-6 h-6 hover:rotate-12 transition duration-150 hover:scale-105 text-white" />
    </div>
    <div className='text-left md:text-center'>
    <h3 className="mt-8 sm:text-lg text-xl font-semibold text-black">{title}</h3>
    <p className="mt-4 text-sm ttext-gray">{description}</p>
    </div>
   
  </div>
);

export default function OurGoals() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-black">
            Launching Soon
          </p>
        </div>
        <h2 className="mt-6 text-5xl md:text-center text-left font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Our Goals
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureBlock 
            key={index}
            Icon={feature.Icon} 
            title={feature.title} 
            description={feature.description} 
          />
        ))}
      </div>
    </div>
  )
}
