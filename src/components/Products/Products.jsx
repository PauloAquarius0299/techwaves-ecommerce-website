// eslint-disable-next-line no-unused-vars
import React from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductsCard';
import img1 from '../../assets/product1.png';
import img2 from '../../assets/product2.jpg';
import img3 from '../../assets/product3.jpg';
import img4 from '../../assets/product4.jpg';
import img5 from '../../assets/product5.jpg';
import img6 from '../../assets/product6.jpg';
import img7 from '../../assets/product7.jpg';
import img8 from '../../assets/product8.jpg';
import img9 from '../../assets/product9.jpg';
import img10 from '../../assets/product10.jpg';
import img11 from '../../assets/product11.jpg';
import img12 from '../../assets/product12.jpg';


const ProductsData = [
    {
        id: 1,
        img: img1,
        title: 'Fire TV Stick Full HD',
        price: '250',
        aosDelay: '0'
    },
    {
        id: 2,
        img: img2,
        title: 'NoteBook Apple Rose Gold',
        price: '2000',
        aosDelay: '200'
    },
    {
        id: 3,
        img: img3,
        title: 'Echo Dot (4ª Geração)',
        price: '520',
        aosDelay: '400'
    },
    {
        id: 4,
        img: img4,
        title: 'Fone de Ouvido Tune 510BT JBL',
        price: '420',
        aosDelay: '600'
    },
    {
        id: 5,
        img: img5,
        title: 'The Last of Us 2 (PS4)',
        price: '89,99',
        aosDelay: '800'
    },
    {
        id: 6,
        img: img6,
        title: 'Redmi Note 11 Graphite XIAOMI',
        price: '1500',
        aosDelay: '1000'
    },
    {
        id: 7,
        img: img7,
        title: 'Fones C50HI Intra-Auricular JBL ',
        price: '120',
        aosDelay: '1200'
    },
    {
        id: 8,
        img: img8,
        title: 'Carregador PS4 MegaDream CEStone',
        price: '600',
        aosDelay: '1600'
    },
    {
        id: 9,
        img: img9,
        title: ' Chromecast 3 GOOGLE ',
        price: '300',
        aosDelay: '1800'
    },
    {
        id: 10,
        img: img10,
        title: 'Fone de Ouvido TWS PHILIPS',
        price: '110',
        aosDelay: '2000'
    },
    {
        id: 11,
        img: img11,
        title: 'Cadeira Gamer TGC12  THUNDERX3',
        price: '400',
        aosDelay: '2200'
    },
    {
        id: 12,
        img: img12,
        title: 'Kit Teclado e Mouse Gamer Evolut',
        price: '550',
        aosDelay: '2600'
    },
]

const Products = () => {
  return (
    <div>
        <div className='container'>
            <Heading 
            title='Nossos Produtos'
            subtitle={'Explore Nossos Produtos'}
            />
            {/* body section */}
            <ProductCard data={ProductsData} />
        </div>
    </div>
  )
}

export default Products