// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../Shared/Button';
import Image1 from '../../assets/category01.png'
import Image2 from '../../assets/category2.png'
import Image3 from '../../assets/category3.png'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/*first col */}
                <div className=' py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div style={{ zIndex: 1 }}>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-200'>Aproveite</p>
                            <p className='text-2xl font-semibold mb-[2px] '>Com Jogo</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Fifa24</p>
                            <Button 
                            text='Comprar'
                            bgColor= {'bg-primary'}
                            textColor={ 'text-white'}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt=""
                    className='w-[190px] h-[240px] absolute bottom-10 right-1'  />
                </div>
                {/*second col */}
                <div className=' py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/80 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div style={{ zIndex: 1 }}>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Aproveite</p>
                            <p className='text-2xl font-semibold mb-[2px] '>Fones</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Bluetooth</p>
                            <Button 
                            text='Comprar'
                            bgColor= {'bg-white'}
                            textColor={ 'text-brandYellow'}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt=""
                    className='w-[150px] h-[220px] absolute bottom-10 right-5'  />
                </div>
                {/*thrid col */}
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                    <div  style={{ zIndex: 1 }}>
                        <div className='space-y-3 mb-4'>
                            <p className=' text-white'>Apple</p>
                            <p className='text-2xl font-semibold mb-[2px] '>IPhone 15</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40'>Red Pro Max</p>
                            <Button 
                            text='Lançamento'
                            bgColor= {'bg-white'}
                            textColor={ 'text-primary'}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt=""
                    className='w-[350px] h-[250px] absolute bottom-10 right-10 -translate-y-1'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category