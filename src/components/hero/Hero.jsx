import React from 'react'

const Hero = () => {
  return (
    <div className='p-4 max-w-[1640px] mx-auto '>
      <div className='max-h-[700px] relative'>
        <div className='max-h-[700px] h-full w-full absolute text-amber-50 flex flex-col justify-center bg-black/40 rounded-xl'>
            <h1 className='px-4 py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-600'>Best</span></h1>
            <h1 className='px-4 py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Food <span>Delivery</span></h1>
        </div>
        <img className='w-full max-h-[700px] object-cover rounded-xl ' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Hero
