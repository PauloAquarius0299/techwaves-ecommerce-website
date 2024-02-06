// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../Shared/Button'

const ProductsCard = ({data}) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'> 
        {/* card section */}
        {data.map((data) => (
          // eslint-disable-next-line react/jsx-key
          <div data-aos='fade-up'
          data-aos-delay={data.aosDeley} className='group' key={data.id}>
            <div 
            
            className='relative'>
              <img src={data.img} className='h-[300px] w-[300px] object-cover rounded-md' />
              <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md'>
                <Button
                text={'Add ao Card'}
                bgColor={'bg-primary'}
                textColor={'text-white'}
                />
              </div>
            </div>
            <div className='leading-7'>
              <h2 className='font-semibold'>{data.title}</h2>
              <h2 className='font-bold'>${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsCard