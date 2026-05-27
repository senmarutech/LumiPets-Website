import { useState } from "react"
import tes1 from '/public/tes1.png'
import tes2 from '/public/tes2.png'
import {ChevronLeft, ChevronRight, Quote, Star} from "lucide-react"

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Abi Wibowo",
            pet: 'Paw (British Shorthair)',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, minima quis nulla neque eos voluptatum?',
            Image: tes1
        },
        {
            id: 2,
            name: "Senmarutech",
            pet: 'James (British Shorthair)',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, minima quis nulla neque eos voluptatum?',
            Image: tes2
        },
    ];

    const next = () => setActiveIndex(
        (prev) => (prev + 1) % testimonials.length);
    const prev = () => setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length);
  return (
    <section id="testimonials" className="py-20 bg-emerald-950
    text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative w-full md:w-5/12"
                data-aos='fade-right'>
                    <div className="absolute -top-3 -left-3 w-full
                    h-full border border-emerald-500/50"></div>
                    <div className="relative z-10 overflow-hidden rounded-xl
                    shadow-xl aspect-square">
                        <img 
                        src={testimonials[activeIndex].Image}
                        alt="Pet"
                        className="w-full h-full object-cover transition-transform
                        duration-500 hover:scale-105" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-emerald-500
                    text-white px-4 py-2 rounded-lg shadow-lg z-20"
                    data-aos='zoom-in'
                    data-aos-delay='300'>
                        <p className="text-xl font-bold leading-none">
                            100%
                        </p>
                        <p className="text-[10px] uppercase font-medium
                        opacity-90">
                            Recovery
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-7/12 space-y-5"
                data-aos='fade-left'
                data-aos-delay='100'>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1
                    bg-white/5 rounded-full border border-white/10"
                    data-aos='fade-up'
                    data-aos-delay='200'>
                        <Star size={12}
                        className="text-yellow-400 fill-yellow-400"/>
                        <span className="text-[11px] font-bold tracking-widest
                        uppercase opacity-80">
                            Trusted Care
                        </span>
                    </div>
                    <Quote size={32}
                    className="text-emerald-500 opacity-40 mb-5"
                    data-aos='fade-up'
                    data-aos-delay='250'/>
                    <h2 className="text-xl md:text-2xl font-serif italic
                    leading-snug text-emerald-50"
                    data-aos='fade-up'
                    data-aos-delay='300'> 
                        "{testimonials[activeIndex].text}"
                    </h2>
                    <div className="pt-4 border-t border-white/10"
                    data-aos='fade-up'
                    data-aos-delay='350'>
                        <h4 className="text-lg font-bold">
                            {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-emerald-400 text-sm">
                            {testimonials[activeIndex].pet}
                        </p>
                    </div>
                    <div className="flex items-center gap-4 pt-2"
                    data-aos='fade-up'
                    data-aos-delay='400'>
                        <button
                        onClick={prev}
                        className="p-2.5 rounded-full border-white/20
                        hover:bg-emerald-500 hover:border-emerald-500
                        transition-all">
                            <ChevronLeft size={18}/>
                        </button>
                        <div className="h-px w-8 bg-white/10"></div>
                        <button
                        onClick={next}
                        className="p-2.5 rounded-full border-white/20
                        hover:bg-emerald-500 hover:border-emerald-500
                        transition-all">
                            <ChevronRight size={18}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials