// eslint-disable-next-line no-unused-vars
import React from 'react';
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'

const Partners = () => {
    return(
        <div className='py-8 mt-24 hidden md:block bg-gray-300 dark:bg-white/10'>
            <div className='container'>
                <div className='grid grid-cols-4 gap-3 place-items-center opacity-50'>
                    <img src={brand1} className='w-[80px] dark:invert' />
                    <img src={brand2} className='w-[80px] dark:invert' />
                    <img src={brand3} className='w-[80px] dark:invert' />
                    <img src={brand4} className='w-[80px] dark:invert' />
                </div>
            </div>
        </div>
    )
}

export default Partners;