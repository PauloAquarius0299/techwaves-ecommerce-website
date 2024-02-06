// eslint-disable-next-line no-unused-vars
import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/blog1.jpg'
import Img2 from '../../assets/blog2.jpg'
import Img3 from '../../assets/blog3.jpg'

const BlogData = [
    {
        title: 'Como escolher o perfeito SmartWatch',
        subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eaque reiciendis sed ipsam illum aliquid eligendi tenetur blanditiis.',
        published: 'Jan 20, 2024 by Paulo',
        image: Img1,
        aosDelay: '0',
    },
    {
        title: 'Como escolher o melhor dispositivo',
        subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eaque reiciendis sed ipsam illum aliquid eligendi tenetur blanditiis.',
        published: 'Jan 20, 2024 by Carolina',
        image: Img2,
        aosDelay: '200',
    },
    {
        title: 'Jogos que marcaram gerações',
        subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eaque reiciendis sed ipsam illum aliquid eligendi tenetur blanditiis.',
        published: 'Jan 20, 2024 by Carlos',
        image: Img3,
        aosDelay: '400',
    },

]

const Blogs = () => {
    return (
        <div className='my-8'>
            <div className='container'>
                {/*header section */}
                <Heading title='Notícias Recentes' subtitle={'Explore Nossos Blogs '} />

                {/* blog section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-4 md:gap-7'>
                    {/* blog card */}
                    {BlogData.map((data) => (
                        // eslint-disable-next-line react/jsx-key
                        <div data-aos='fade-up' data-aos-delay={data.aosDelay}>
                            <div   >
                                <img src={data.image} className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 cursor-pointer' />
                            </div>
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-camp-1'>{data.title}</p>
                                <p className='line-camp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))}                    
                </div>
            </div>
        </div>
    )
}

export default Blogs;