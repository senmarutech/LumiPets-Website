import { useEffect, useState } from "react";
import AOS from 'aos'
import quot from '/public/quot.png'
import { ChevronRight, HelpCircle, PawPrint, Phone } from "lucide-react";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    { question: "Clinical Services", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { question: "How to reach us ?", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { question: "Pet safety", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    { question: "Emergency policies", answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  ];

  useEffect(() => {
    AOS.refresh();
  }, [openIndex]);

  const handleQuestionClick = (index) => {
    setOpenIndex(index);
  };
  return (
    <div id="faqs" className="min-h-screen bg-white flex items-center justify-center
    mt-10 overflow-hidden p-6 font-sans text-gray-900 w-full">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl font-bold text-center mb-10 tracking-tight
        text-gray-800"
        data-aos='fade-up'>
          Your Questions, <span className="text-green-400">
            Answered
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group justify-self-center"
          data-aos='fade-up'
          data-aos-delay='100'>
            <div className="absolute -inset-1 bg-green-500 rounded-4xl
            blur opacity-80 group-hover:opacity-95 transition duration-500">
            </div>
            <div className="relative aspect-4/5 w-72 md:w-80 bg-gray-100
            rounded-4xl overflow-hidden border-2 border-green-400">
              <img 
              src={quot} 
              alt="quot" 
              className="w-full h-full object-cover"/>
              <div className="absolute bottom-4 right-4 bg-green-600
              border border-white px-4 py-2 rounded-xl flex
              items-center gap-2 shadow-lg text-white"
              data-aos='zoom-in'
              data-aos-delay='400'>
                <div className="text-right">
                  <p className="text-[10px] font-bold leading-none uppercase
                  tracking-tighter">Happy</p>
                  <p className="text-sm font-bold leading-none 
                  uppercase">Paws</p>
                </div>
                <PawPrint size={18} className="fill-white"/>
              </div>
            </div>
          </div>
          <div className="bg-emerald-950 border-gray-100 rounded-[2.5rem]
          p-8 shadow-xl shadow-gray-200/50"
          data-aos='fade-left'
          data-aos-delay='200'>
            <div className="flex items-center gap-2 mb-8 bg-green-100
            w-fit px-4 py-1.5 rounded-full border border-green-200"
            data-aos='fade-up'
            data-aos-delay='250'>
              <HelpCircle size={16} className="text-green-600"/>
              <span className="text-xs font-bold text-green-700
              uppercase tracking-widest">
                FAQ Questions, Answered
              </span>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                key={index}
                className={`group cursor-pointer rounded-2xl bordert
                transition-all duration-300 
                ${openIndex === index
                  ? 'bg-white border-green-500 shadow-md'
                  : 'bg-white/60 border-gray-200 hover:border-green-300'
                }`}
                onClick={() => handleQuestionClick(index)}
                data-aos='fade-up'
                data-aos-delay={`${300 + (index * 50)}`}>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold
                        ${openIndex === index
                          ? 'text-green-700'
                          : 'text-emerald-950'
                        }`}>
                          {faq.question}
                      </span>
                      <div className={`p-1 rounded-full border transition-all
                        duration-300
                        ${openIndex === index
                          ? 'bg-green-500 border-green-500 rotate-90'
                          : 'border-emerald-950'
                        }`}>
                          <ChevronRight  size={14} className={`transition-colors duration-300
                            ${openIndex === index
                              ? 'text-white'
                              : 'text-emerald-950'
                            }`}/>
                      </div>
                    </div>
                    {openIndex === index && (
                      <p className="mt-3 text-[12px] text-gray-500
                      leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10"
        data-aos='fade-up'
        data-aos-delay='600'>
          <button className="flex items-center gap-2 border-2 border-green-600
          text-green-700 px-8 py-3 rounded-xl hover:bg-green-600 hover:text-white
          transition-all duration-300 font-bold group shadow-md">
            <Phone size={18} className="group-hover:animate-bounce"/>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions