import bghero from '/public/bghero.png'
import hero from '/public/hero.png' 
import per1 from '/public/per1.png'
import per2 from '/public/per2.png'
import per3 from '/public/per3.png'

const Hero = () => {
  return (
    <div className='relative'>
      <div className='absolute -top-32 left-0 right-0 bottom-0 -z-10'>
        <img 
        src={bghero} 
        alt="Background"
        className='w-full h-full object-cover' />
      </div>
      <section className='relative lg:min-h-screen flex flex-col items-center
      justify-center text-center px-6 overflow-hidden lg:pt-4'>
        <div className='flex items-center gap-2 px-4 p-2 bg-white/30 hover:bg-white/50 rounded-full
        shadow text-sm mb-6 mt-9'
        data-aos='fade-down'
        data-aos-delay='100'>
          <div className='flex -space-x-2'> 
            <img src={per1} alt="User 1"
            className='w-6 h-6 rounded-full border-2 border-white
            object-cover' />
            <img src={per2} alt="User 2"
            className='w-6 h-6 rounded-full border-2 border-white
            object-cover' />
            <img src={per3} alt="User 3"
            className='w-6 h-6 rounded-full border-2 border-white
            object-cover' />
          </div>
          <span className='text-gray-600'>
            5000+ Happy Pet Owners
          </span>
        </div>
        <h1 className='text-4xl md:text-6xl font-bold leading-tight'
        data-aos='fade-up'
        data-aos-delay='200'>
          Caring for Your Pets <br />
          Like Family
        </h1>
        <p className='mt-4 max-w-xl text-gray-600'
        data-aos='fade-up'
        data-aos-delay='300'>
          Expert luminary with compassion and precision for your pets
        </p>
        <div className='mt-8 flex flex-col items-center gap-3'
        data-aos='fade-up'
        data-aos-delay='400'>
          <button className='px-8 py-3 rounded-full bg-emerald-950
          text-white shadow-2xl hover:bg-green-800 transition'>
            Get Appointment
          </button>
        </div>
        <div className='mt-10 w-full max-w-4xl relative'
        data-aos='zoom-in'
        data-aos-delay='500'>
          <img src={hero} alt="hero" 
          className='w-220 lg:h-120 rounded-2xl shadow-2xl'/>
        </div>
      </section>
    </div>
  )
};

export default Hero