import { useState } from "react"
import app from '/public/app.png'
import { CalendarRange, Clock, Heart, MessageSquare, PawPrint, Phone, User } from "lucide-react";

const Appointment = () => {
    const [formData, setFormData] = useState({
        petName: '',
        petType: 'dog',
        ownerName: '',
        phone: '',
        date: '',
        time: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Appointment Booked SuccesFully!');
    };
  return (
    <div id="appointment" className="min-h-screen flex items-center
    justify-center p-4 mt-16">
        <div className="max-w-5xl w-full bg-gray-50 rounded-3xl shadow-2xl
        overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 relative overflow-hidden"
            data-aos='fade-right'>
                <img src={app} alt="Cute Panda"
                className="absolute inset-0 w-full h-full object-cover"/>
                <div className="relative h-full flex flex-col justify-end
                p-8 bg-linear-to-t from-green-700/40 to-transparent text-white">
                    <h2 className="text-4xl font-bold mb-2">
                        Join Our Family
                    </h2>
                    <p className="text-green-100 italic">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsam.
                    </p>
                    <div className="mt-6 flex gap-4 text-sm font-medium">
                        <span className="bg-white/20 backdrop-blur-md px-3
                        py-1 rounded-full flex items-center gap-1"
                        data-aos='zoom-in'
                        data-aos-delay='200'>
                            <Heart size={14} className="fill-white"/>
                            Professional Care
                        </span>
                        <span className="bg-white/20 backdrop-blur-md px-3
                        py-1 rounded-full flex items-center gap-1"
                        data-aos='zoom-in'
                        data-aos-delay='300'>
                            <PawPrint size={14} className="fill-white"/>
                            24/7 Support
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:w-7/12 p-8 lg:p-12"
            data-aos='fade-left'
            data-aos-delay='100'>
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-800
                    tracking-tight">
                        Book an <span className="text-green-400">
                            Appointment
                        </span>
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </header>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1"
                        data-aos='fade-up'
                        data-aos-delay='150'>
                            <label className="text-sm font-bold text-gray-700
                            flex items-center gap-2">
                                <PawPrint size={16}
                                className="text-green-600"/>
                                Pet Name
                            </label>
                            <input 
                            required
                            name="petName"
                            className="w-full px-4 py-3 bg-gray-50 border text-sm
                            border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500
                            focus:bg-white outline-none transition-all"
                            placeholder="e.g. Max"
                            onChange={handleChange}/>
                        </div>
                        <div className="space-y-1"
                        data-aos='fade-up'
                        data-aos-delay='200'>
                            <label className="text-sm font-bold text-gray-700
                            flex items-center gap-2">
                                <PawPrint size={16} className="text-green-600"/>
                                Pet Type
                            </label>
                            <select 
                            name="petType"
                            className="w-full px-4 py-3 bg-gray-50 text-sm
                            border border-gray-200 rounded-xl focus:ring-2
                            focus:ring-green-500 focus:bg-white outline-none
                            transition-all"
                            onChange={handleChange}>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="bird">Bird</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1"
                        data-aos='fade-up'
                        data-aos-delay='250'>
                            <label className="text-sm font-bold text-gray-700
                            flex items-center gap-2">
                                <User size={16} className="text-green-600"/>
                                Owner Name
                            </label>
                            <input 
                            required
                            name="ownerName"
                            className="w-full px-4 py-3 bg-gray-50 text-sm
                            border border-gray-200 rounded-xl focus:ring-2
                            focus:ring-green-500 focus:bg-white outline-none
                            transition-all"
                            onChange={handleChange}/>
                        </div>
                        <div className="space-y-1"
                        data-aos='fade-up'
                        data-aos-delay='300'>
                            <label className="text-sm font-bold text-gray-700 flex
                            items-center gap-2">
                                <Phone size={16} className="text-green-600"/>
                                Phone
                            </label>
                            <input 
                            required
                            type="tel"
                            name="phone"
                            className="w-full px-4 py-3 bg-gray-50 text-sm
                            border border-gray-200 rounded-xl focus:ring-2
                            focus:ring-green-500 focus:bg-white outline-none
                            transition-all"
                            placeholder="555-0000"
                            onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Date */}
                        <div className="space-y-1"
                        data-aos='fade-up'
                        data-aos-delay='350'>
                            <label className="text-sm font-bold text-gray-700
                            flex items-center gap-2">
                                <CalendarRange size={16} className="text-green-600"/>
                                Date
                            </label>
                            <input 
                            required
                            type="date"
                            name="date"
                            className="w-full px-4 py-3 bg-gray-50
                            border border-gray-200 rounded-xl focus:ring-2
                            focus:ring-green-500 focus:bg-white outline-none
                            transition-all"
                            onChange={handleChange}/>
                        </div>
                        {/* Time */}
                        <div className="space-y-1"
                        data-aos='fade-up'
                        data-aos-delay='350'>
                            <label className="text-sm font-bold text-gray-700
                            flex items-center gap-2">
                                <Clock size={16} className="text-green-600"/>
                                Time
                            </label>
                            <input 
                            required
                            type="time"
                            name="time"
                            className="w-full px-4 py-3 bg-gray-50
                            border border-gray-200 rounded-xl focus:ring-2
                            focus:ring-green-500 focus:bg-white outline-none
                            transition-all"
                            onChange={handleChange}/>
                        </div>
                    </div>
                    {/* Notes */}
                        <div className="space-y-1"
                        data-aos='fade-up'
                        data-aos-delay='350'>
                            <label className="text-sm font-bold text-gray-700
                            flex items-center gap-2">
                                <MessageSquare size={16} className="text-green-600"/>
                                Reason for visit
                            </label>
                            <textarea 
                            required
                            name="notes"
                            rows="2"
                            className="w-full px-4 py-3 bg-gray-50 text-sm
                            border border-gray-200 rounded-xl focus:ring-2
                            focus:ring-green-500 focus:bg-white outline-none
                            transition-all"
                            placeholder="Briefly describe the issue..."
                            onChange={handleChange}/>
                        </div>
                        <button 
                        type="submit"
                        className="w-full bg-emerald-950 py-4 hover:bg-green-800
                        text-white font-bold rounded-xl shadow-lg shadow-green-100
                        transition duration-300 transform hover:-translate-y-1 active:scale-95
                        flex items-center justify-center gap-2"
                        data-aos='fade-up'
                        data-aos-delay='500'>
                            Confirm Appointment
                        </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Appointment