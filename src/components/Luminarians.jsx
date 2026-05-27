import vet1 from '/public/vet1.png'
import vet2 from '/public/vet2.png'
import vet3 from '/public/vet3.png'

const cards = [
    {
        img: vet1,
        title: "Surgery Care",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, hic."
    },
    {
        img: vet2,
        title: "Surgery Care",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, hic."
    },
    {
        img: vet3,
        title: "Surgery Care",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, hic."
    }
]
const Luminarians = () => {
  return (
    <section id='luminarians' className='w-full py-20 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
            <div
            className='mb-12'
            data-a0s='fade-up'>
                <h2 className='text-3xl md:text-4xl font-bold text-green-400 mb-4'>
                   Luminary
                   <span className='text-gray-900'> Services</span> 
                </h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Magni, veritatis?
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center
            gap-6 max-w-5xl mx-auto'>
                {cards.map((card, index) => (
                    <div
                    key={index}
                    className='bg-white rounded-4xl w-80 flex flex-col
                    items-center shadow-lg transform transition duration-300
                    hover:-translate-y-3 hover:shadow-2xl'
                    data-aos='fade-up'
                    data-aos-delay={`${index * 100}`}>
                        <img src={card.img} alt={card.title}
                        className='w-80 h-72 object-cover shadow-2xl rounded-4xl
                        mb-6 transition-transform duration-300 hover:scale-105' />
                        <button className='bg-linear-to-r from-green-600 to-green-500
                        text-white px-6 py-3 rounded-2xl font-medium flex items-center
                        gap-2 relative -top-10 transform transition duration-300 hover:scale-105
                        hover:-translate-y-1'>
                            Click Here
                        </button>
                        <h3 className='text-2xl font-semibold mb-3 text-gray-800'>
                            {card.title}
                        </h3>
                        <p className='mr-4 text-sm text-gray-600 mb-6'>
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
};

export default Luminarians