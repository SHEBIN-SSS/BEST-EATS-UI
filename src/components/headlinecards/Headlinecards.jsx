import React from 'react'

const Headlinecards = () => {
  return (
    <div className='max-w-[1640px] mx-auto grid md:grid-cols-3 gap-6 p-4 py-12 '>
      <div className='rounded-xl relative'>
        <div className='absolute text-white w-full h-full bg-black/40 rounded-xl lg:py-16 '>
            <p className='text-2xl font-bold px-2 pt-4'>Suns out ,bogos out!</p>
            <p className='px-2 font-md '>Throuhg 8/26</p>
            <button className='bg-white text-black border-white mx-2 bottom-4 abslute mt-2 '>order now</button> 

        </div>
        <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl ' src="https://images.pexels.com/photos/6439486/pexels-photo-6439486.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
      <div className='rounded-xl relative'>
        <div className='absolute text-white w-full h-full bg-black/40 rounded-xl lg:py-16 '>
            <p className='text-2xl font-bold px-2 pt-4'>Suns out ,bogos out!</p>
            <p className='px-2 font-md '>Throuhg 8/26</p>
            <button className='bg-white text-black border-white mx-2 bottom-4 abslute mt-2 '>order now</button> 

        </div>
        <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl ' src="https://images.pexels.com/photos/6439486/pexels-photo-6439486.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
      <div className='rounded-xl relative '>
        <div className='absolute text-white w-full h-full bg-black/40 rounded-xl lg:py-16 '>
            <p className='text-2xl font-bold px-2 pt-4'>Suns out ,bogos out!</p>
            <p className='px-2 font-md '>Throuhg 8/26</p>
            <button className='bg-white text-black border-white mx-2 bottom-4 abslute mt-2 '>order now</button> 

        </div>
        <img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl  ' src="https://images.pexels.com/photos/6439486/pexels-photo-6439486.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
    </div>
  )
}

export default Headlinecards
