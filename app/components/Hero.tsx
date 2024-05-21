import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png'

const Hero = () => {
  return (

    <div className="w-full md:py-10 relative bg-white overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-0 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="mx-auto flex justify-center items-center flex-col md:flex-row max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="inline-flex items-center">

            <Image src={logo} alt="DevUI" width={150} height={150} /> 
            
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-[#0C4B33] md:text-4xl lg:text-6xl">
            Django India
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam nulla aperiam quo
            possimus, nihil molestiae modi tenetur esse qui repudiandae cum fuga aspernatur ea?
          </p>
          <div className="mt-8">
            <button
              type="button"
              className="rounded-md bg-[#44B78B] px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0C4B33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </div>
        <img
  className="sm:max-w-[500px] max-w-[300px] py-5 object-cover lg:aspect-auto lg:h-[400px]"
  src="https://illustrations.popsy.co/green/digital-nomad.svg"
  alt="Team"
/>

      </div>
    </div>
  );
};

export default Hero;
