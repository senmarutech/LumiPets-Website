import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react"


const ScrollToTopButton = () => {
    const [isVisible, setvisible] = useState(false);

    const handleScroll = () => {
        setvisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <button
    onClick={scrollToTop}
    className={`fixed bottom-6 right-6 bg-green-600 text-white
    rounded-full w-12 h-12 flex items-center justify-center transition-all
    duration-300 hover:opacity-90 hover:scale-110 shadow-xl hover:shadow-2xl
    z-50 group
    ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10 pointer-events-none'
    }`}
    aria-label="Scroll to top">
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1
        transition-transform"/>
    </button>
  );
};

export default ScrollToTopButton