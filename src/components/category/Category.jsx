import React, { useState } from 'react'
import { categories } from '../../data/data.js'

const Category = () => {
console.log(categories)
// const [foods,setFoods] = useState(categories)

  return (
    <div className='max-w-[1640px] mx-auto px-2 py-12'>
        <h1 className='font-bold text-3xl text-orange-600 text-center'>Top rated Menus</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item,index)=>(
        <div className='bg-gray-100 rounded-lg p-4 flex justify-between items-center' key={index}>
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img className='w-20' src={item.image} alt={item.name} />
        </div>
))}

      </div>
      <div>
    <h1 className='font-bold text-center py-4 '>Developed by SHEBIN with <span className='text-red-600'>LOVE</span></h1>
</div>
    </div>
  )
}

export default Category
