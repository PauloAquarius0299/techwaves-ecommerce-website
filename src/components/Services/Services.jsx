// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from 'react-icons/fa';

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
        title: 'Frete Grátis',
        description: 'Frete Grátis em Todos os Pedidos',
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        title: 'Dinheiro Seguro',
        description: '30 Dias de Garantia',
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
        title: 'Pagamento Seguro',
        description: 'Todos os Seus Dados Protegidos',
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        title: 'Ajuda Online 24h',
        description: 'Suporte Tecnico Disponivel 24h por dia',
    },
]

const Services = () => {
  return (
    <div>
        <div className="container my-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {ServiceData.map((data) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='flex flex-col items-start sm:flex-row gap-4'>
                        {data.icon}
                        <div>
                            <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                            <h1 className='text-gray-600 text-sm'>{data.description}</h1>
                    </div>
                    </div>
                    
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Services