// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../Shared/Button'
import Image1 from '../../assets/categoryb1.png'
import Image2 from '../../assets/categoryb2.png'
import Image3 from '../../assets/categorib3.png'

const Category2 = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/*fisrt col*/}
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div  style={{ zIndex: 1 }}>
                        <div className='space-y-3 mb-4'>
                            <p className='mb-[2px] text-white'>Dell</p>
                            <p className='text-2xl font-semibold mb-[2px] '>Notebook</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Inspiration 15</p>
                            <Button 
                            text='Lançamento'
                            bgColor= {'bg-primary'}
                            textColor={ 'text-white'}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt=""
                    className='w-[300px] h-[220px] absolute bottom-10 right-4 -translate-y-1'  />
                </div>
                {/* secondary section */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div style={{ zIndex: 1 }}>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Aproveite</p>
                            <p className='text-2xl font-semibold mb-[2px] '>Cadeira Gamer</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Fortrek Neon</p>
                            <Button 
                            text='Comprar'
                            bgColor= {'bg-white'}
                            textColor={ 'text-brandGreen'}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt=""
                    className='w-[200px] h-[220px] absolute bottom-10 -right-4'  />
                </div>
                {/* third section */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div style={{ zIndex: 1 }} >
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-200'>Aproveite</p>
                            <p className='text-2xl font-semibold mb-[2px] '>JBL</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Bluetooph</p>
                            <Button 
                            text='Comprar'
                            bgColor= {'bg-white'}
                            textColor={ 'text-brandBlue'}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt=""
                    className='w-[150px] h-[220px] absolute right-5 lg:top-[30px]'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category2