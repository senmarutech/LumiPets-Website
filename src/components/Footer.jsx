import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '/public/logo.png'
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

const Footer = () => {
    // const currentYear = new Date().getFullYear();

    const navigation = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#service' },
  { name: 'Our Vets', href: '#luminarians' },
  { name: 'Booking', href: '#appointment' },
];
    const help = [
  { name: 'Emergency', href: '#appointment' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Location', href: '#' },
  { name: 'Terms', href: '#' },
];

  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10
    overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2
        translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px]
        rounded-full">
        </div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-2 ml-8">
                        <img 
                        src={logo} 
                        className="w-12 h-12 p-1"/>
                        <span className="font-bold text-2xl text-green-400">
                            Lumi<span className="text-white">Pets</span>
                        </span>
                    </div>
                    <p className="text-emerald-100/60 max-w-sm leading-relaxed
                    text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        At, odit?
                    </p>
                    <div className='flex gap-3'>
                        {[FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
                            <a 
                            key={index}
                            href="#"
                            className='w-10 h-10 rounded-full border border-emerald-800
                            flex items-center justify-center hover:bg-emerald-500
                            hover:border-emerald-500 hover:text-emerald-950 transition-all
                            duration-300'>
                                <Icon size={18}/>
                            </a>
                        ))}
                    </div>
                </div>
                <div className='lg:col-span-4 grid grid-cols-2 gap-8'>
                    <div className='space-y-6'>
                        <h4 className='text-xs font-bold uppercase tracking-[0.2em]
                        text-emerald-400'>
                            Navigation
                        </h4>
                        <ul className='space-y-4'>
                            {navigation.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href}
                                    className='group flex items-center gap-1 text-sm text-emerald-100/50
                                    hover:text-white transition-colors'>
                                        {link.name}
                                        <ArrowUpRight size={12}
                                        className='opacity-0 group-hover:opacity-100 transition-opacity'/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='space-y-6'>
                        <h4 className='text-xs font-bold uppercase tracking-[0.2em]
                        text-emerald-400'>
                            Help
                        </h4>
                        <ul className='space-y-4'>
                            {help.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href}
                                    className='group flex items-center gap-1 text-sm text-emerald-100/50
                                    hover:text-white transition-colors'>
                                        {link.name}
                                        <ArrowUpRight size={12}
                                        className='opacity-0 group-hover:opacity-100 transition-opacity'/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='lg:col-span-3 space-y-6'>
                        <h4 className='text-xs font-bold uppercase tracking-[0.2em]
                        text-emerald-400'>
                            Quick Contract
                        </h4>
                        <div className='space-y-4'>
                            <div className='flex items-center gap-3 p-3 bg-emerald-900/30
                            rounded-2xl border border-emerald-800/50'>
                                <Phone size={16} className='text-emerald-400'/>
                                <span className='text-sm font-medium'>
                                    +62 822 2559 6862
                                </span>
                            </div>
                            <div className='flex items-center gap-3 p-3 bg-emerald-900/30
                            rounded-2xl border border-emerald-800/50'>
                                <Mail size={16} className='text-emerald-400'/>
                                <span className='text-sm font-medium'>
                                    LumiPets@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer