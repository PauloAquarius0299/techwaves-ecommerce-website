// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import ImageBanner from './assets/banner01.png';
import Image2Banner from './assets/banner2.png';
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerData = {
  discount: '30% OFF',
  title: 'controle sony (ps5)',
  date: '10 Jan to 28 Jan',
  image: ImageBanner,
  title2: 'Dualsense Edge',
  title3: 'Vendas Verão',
  title4: 
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eaque reiciendis sed ipsam illum aliquid eligendi tenetur blanditiis.',
  bgColor: '#1376f4',
};
const BannerData2 = {
  discount: '50% OFF',
  title: 'SmartWatch apple',
  date: '10 Jul to 28 Jul',
  image: Image2Banner,
  title2: 'Watch Series 6 Vermelho',
  title3: 'Vendas Inverno',
  title4: 
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eaque reiciendis sed ipsam illum aliquid eligendi tenetur blanditiis.',
  bgColor: '#f42c37',
};

const App = () => {
  const [orderPopup, setOrderPopup ] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
  }, [])

  return (
    <div data-aos='zoom-out' className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App
