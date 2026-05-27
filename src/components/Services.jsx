import { useState } from "react"
import icon from '/public/icon.png'
import { FaArrowRight, FaHeartbeat, FaHospitalSymbol, FaStethoscope, FaSyringe, FaTooth, FaXRay } from "react-icons/fa";


const Services = () => {
    const [activeService, setActiveService] = useState(1);

    const services = [
        {
            id: 1,
            icon: <FaStethoscope />,
            title: 'General Checkup',
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio porro consequuntur. Omnis, sapiente laudantium!",
            features: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
            price: '$45',
            duration: '30-45 min' 
        },
        {
            id: 2,
            icon: <FaSyringe />,
            title: 'Vacinations',
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio porro consequuntur. Omnis, sapiente laudantium!",
            features: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
            price: '$120+',
            duration: '1-2 hours' 
        },
        {
            id: 3,
            icon: <FaXRay />,
            title: 'Diagnostic Imaging',
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio porro consequuntur. Omnis, sapiente laudantium!",
            features: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
            price: '$120+',
            duration: '1-2 hours' 
        },
        {
            id: 4,
            icon: <FaTooth />,
            title: 'Dental',
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio porro consequuntur. Omnis, sapiente laudantium!",
            features: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
            price: '$120+',
            duration: '1-2 hours' 
        },
        {
            id: 5,
            icon: <FaHeartbeat />,
            title: 'Emergency Care',
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio porro consequuntur. Omnis, sapiente laudantium!",
            features: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
            price: '$120+',
            duration: '1-2 hours' 
        },
        {
            id: 6,
            icon: <FaHospitalSymbol />,
            title: 'Day Care',
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio porro consequuntur. Omnis, sapiente laudantium!",
            features: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
            price: '$200+',
            duration: '1-2 hours' 
        }
    ]
  return (
    <div className="min-h-screen overflow-hidden">
        <div id="service" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12"
                data-aos='fade-up'>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-green-400">Services</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Placeat, doloribus quo. Molestias magnam sequi odio!
                    </p>
                </div>
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3 mb-10"
                    data-aos='fade-up'
                    data-aos-delay='100'>
                        {services.map((service) => (
                            <button
                            key={service.id}
                            onClick={() => setActiveService(service.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all
                            duration-300 ${activeService === service.id
                                ? `bg-linear-to-r from-green-600 to-green-500 text-white shadow-lg`
                                : `bg-white text-gray-700 hover:bg-gray-50 border border-gray-200
                                hover:border-green-200 hover:shadow-md`
                            }`}>
                                {service.title}
                            </button>
                        ))}
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl p-8
                    max-w-4xl mx-auto border border-gray-100"
                    data-aos='zoom-in'
                    data-aos-delay='200'>
                        {services.filter(
                            s => s.id === activeService).map((service) => (
                                <div
                                key={service.id}
                                className="md:flex items-start gap-8">
                                    <div className="bg-linear-to-r from-green-50 to-emerald-50
                                    mb-6 md:mb-0 p-8 rounded-xl md:w-2/5 border border-green-100">
                                        <div className="text-green-400 text-5xl mb-6">
                                            {service.icon}
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 mb-2">
                                            {service.title}
                                        </div>
                                        <div className="text-3xl font-bold bg-linear-to-r
                                        from-green-400 text-emerald-500 bg-clip-text mb-2">
                                            {service.price}
                                        </div>
                                        <div className="text-gray-500">
                                            Duration: {service.duration}
                                        </div>
                                    </div>
                                    <div className="md:w-3/5">
                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                            {service.desc}
                                        </p>
                                        <div className="mb-8">
                                            <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                                                Service Includes :
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {service.features.map((feature, index) => (
                                                    <div
                                                    key={index}
                                                    className="flex items-center gap-3"
                                                    data-aos='fade-left'
                                                    data-aos-delay={`${300 + (index * 50)}`}>
                                                        <div className="bg-green-100 p-1 rounded-full">
                                                            <img src={icon} alt="icon" 
                                                            className="w-4 h-4 text-green-500"/>
                                                        </div>
                                                        <span className="text-gray-700">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <button className="bg-emerald-950 hover:bg-green-800
                                        text-white px-8 py-3 rounded-full font-semibold flex items-center
                                        gap-3 transition shadow-2xl"
                                        data-aos='fade-up'
                                        data-aos-delay='600'>
                                            Book This Service
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Services