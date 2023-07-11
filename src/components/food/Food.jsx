import React, { useState } from 'react'
import {data} from '../../data/data.js'

const Food = () => { 
    // console.log(data)
    const [foods,setFoods] = useState(data)

    //filter code
    const filterType =(category) => {
        setFoods(
            data.filter((item) => 
            {
                return item.category === category
            }
            )
        )
    }

    // filter by price

    const filterPrice =(price) =>{
        setFoods(
            data.filter((item)=> {
                return item.price === price
            })
        )
    }

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 '>
        <h1 className='font-bold text-4xl text-center text-orange-600'>Top Rated Menu</h1>
       <div className='flex flex-col lg:flex-row justify-between '>
        {/* filter section */}
        <div className='mt-2'>
            {/* filter type */}
        <p className='font-bold  '>Filter by type</p>
        <div className='flex  flex-wrap mt-2 '>
            <button onClick={()=> setFoods(data)} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white '>All</button>
            <button onClick={()=> filterType('burger')} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white '>bURGERS</button>
            <button onClick={()=> filterType('pizza')} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white '>pIZZA</button>
            <button onClick={()=> filterType('salad')} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white '>Salads</button>
            <button onClick={()=> filterType('chicken')} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white '>chicken</button>
        </div>

        
        </div>
        <div className='mt-2'>
            {/* filter price */}
            <p className='font-bold'>Filter by Price</p>
        <div className='flex  flex-wrap mt-2 '>
            <button onClick={()=> filterPrice('$')} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white'>$</button>
            <button onClick={()=> filterPrice('$$')} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white'>$$</button>
            <button onClick={()=> filterPrice('$$$')} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white'>$$$</button>
            <button onClick={()=> filterPrice('$$$$')} className='border border-orange-600 mx-1 text-black hover:bg-orange-600 hover:text-white'>$$$$</button>
            
        </div>
        </div>


       </div>
{/* display items */}

       <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6  '>
        {foods.map((item,index)=>
        (<div key={index} className='border rounded-lg shadow-lg hover:scale-105 duration-300 '>
            <img className='w-full h-[200px] object-cover rounded-t-lg ' src={item.image} alt={item.name} />
        <div className='flex justify-between p-4'>
            <p className='font-bold '>{item.name}</p>
            <p>
                <span className='bg-orange-600 rounded-full p-1 text-white '>
                    {item.price}
                </span>
            </p>
        </div>
    </div>
 )
)}
</div>
    </div>
  )
}

export default Food
