import { useState } from 'react'
import logo from '/public/logo.png'
import { FiMenu, FiX } from 'react-icons/fi'

const listNav = [
    { name: "Luminarians", href: "#luminarians"},
    { name: "About", href: "#about"},
    { name: "Service", href: "#service"},
    { name: "Testimonials", href: "#testimonials"},
    { name: "Appointment", href: "#appointment"}
] 

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav className='w-full px-6 md:px-10 py-5 flex items-center
    justify-between relative'>
        <div className='flex items-center gap-2'>
            <img src={logo} alt="logo" className='w-12 h-12 p-1'/>
            <span className='font-bold text-2xl text-green-400'>
                Lumi<span className='text-black'>Pets</span>
            </span>
        </div>
        <ul className='hidden md:flex gap-8 text-sm text-gray-700'>
            {listNav.map((item, index) => (
                <li
                key={index}>
                    <a 
                    href={item.href}
                    className='hover:text-green-700 transition-colors'>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
        <div className='hidden md:flex items-center gap-2 bg-gray-200 rounded-full
        p-1'>
            <button className='px-6 py-2 rounded-full text-sm font-medium
            text-gray-100 bg-emerald-950 hover:shadow-md transition'>
                Log In
            </button>
            <button className='px-6 py-2 rounded-full text-sm font-medium
            text-gray-900 hover:shadow-md hover:bg-white/50 transition'>
                Sign In
            </button>
        </div>

        {/* Mobile Button */}
        <button
        onClick={() => setOpen(!open)}
        className='md:hidden text-2xl text-gray-800'>
            { open ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        { open && (
            <div className='absolute top-full left-0 w-full bg-white
            shadow-lg md:hidden z-50'>
                <ul className='flex flex-col gap-4 p-6 text-gray-700'>
                    {listNav.map((item, index) => (
                        <li key={index}>
                            <a 
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className='block hover:text-green-700
                            transition'>
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <div className='flex flex-col gap-3 pt-4'>
                        <button className='py-2 rounded-full
                        bg-emerald-950 text-white'>
                            Log In
                        </button>
                        <button className='py-2 rounded-full border'>
                            Sign In
                        </button>
                    </div>
                </ul>
            </div>
        )}
    </nav>
  )
};

export default Navbar