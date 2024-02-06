// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/Image1Hero.png';
import Image2 from '../../assets/Image2Hero.png';
import Image3 from '../../assets/Image3hero.png';
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: 'Ulitma Geração',
        title: 'PlayStation 5',
        title2: 'com controle',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, delectus totam laboriosam cum reiciendis aliquam pariatur. Optio error ipsum ad! Ratione minus beatae tempora error, autem esse suscipit alias quisquam!',
    },
    {
        id: 2,
        img: Image2,
        subtitle: 'Intel Core',
        title: 'NoteBook',
        title2: 'game estelar',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, delectus totam laboriosam cum reiciendis aliquam pariatur. Optio error ipsum ad! Ratione minus beatae tempora error, autem esse suscipit alias quisquam!',
    },
    {
        id: 3,
        img: Image3,
        subtitle: 'Novo Mundo',
        title: 'Oculos Virtual',
        title2: '3D',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, delectus totam laboriosam cum reiciendis aliquam pariatur. Optio error ipsum ad! Ratione minus beatae tempora error, autem esse suscipit alias quisquam!',
    },
]


const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
            {/* hero section */}
        <Slider {...settings}>
            {HeroData.map((data) => (
                <div key={data.id}>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                            <h1 data-aos='zoom-out' 
                            data-aos-duration='500'
                            data-aos-once='true'
                            className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                            <h1 
                            data-aos='zoom-out' 
                            data-aos-duration='500'
                            data-aos-once='true'
                            className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                            <h1 
                            data-aos='zoom-out' 
                            data-aos-duration='500'
                            data-aos-once='true'
                            className='text-5xl uppercase text-gray-400 dark:text-white/5 sm:text-[80px] md:text-[60px] font-bold'>{data.title2}</h1>
                            <div
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='500'
                            data-aos-delay='300'
                            >
                                <Button text='Compre por Categoria' bgColor='bg-primary' textColor='text-white' 
                                handler={handleOrderPopup}
                                />
                            </div>
                        </div>
                        <div>
                            <div data-aos='zoom-in' data-aos-once='true'
                            className='relative z-10'
                            >
                                <img src={data.img} alt=""
                                className='w-[400px] sm:e-[450px] h-[400px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
        </div>
    </div>
  )
}

export default Hero