import './App.css'
import React, { useState, useEffect, useRef } from 'react';

export default function CarePoint() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const Logo = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M15 0L20 10L30 15L20 20L15 30L10 20L0 15L10 10L15 0Z" fill="#00000F"/>
    </svg>
  );

  const navLinks = [
    { href: '#home', label: 'Home', isHome: true },
    { href: '#about', label: 'About us' },
    { href: '#services', label: 'Services' },
    { href: '#blog', label: 'Blog' }
  ];

  const doctors = [
    { id: 1, img: 'https://i.pravatar.cc/40?img=1' },
    { id: 2, img: 'https://i.pravatar.cc/40?img=2' },
    { id: 3, img: 'https://i.pravatar.cc/40?img=3' }
  ];

  const stats = [
    { number: '15', label: 'Years Experience' },
    { number: '100+', label: 'Expert doctors' },
    { number: '200+', label: 'Medical Staff' },
    { number: '400+', label: 'Patient Capacity' }
  ];

  return (
    <div className="min-h-screen bg-white">
     
      <nav className="sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div ref={navRef} className="flex justify-between items-center py-4">
           
            <div className="flex items-center gap-2.5 text-2xl font-bold text-gray-800">
              <Logo />
              <span>CarePoint</span>
            </div>

           
            <ul className="hidden lg:flex items-center gap-8 list-none relative right-70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-medium text-black transition-colors hover:text-[#6C63FF] ${
                      link.isHome ? 'border border-black px-3 py-1 rounded-[14px]' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

           
            <button className="hidden lg:flex items-center bg-black text-white px-4 py-2 rounded-full font-semibold transition-colors hover:bg-gray-800" >
              Contact
              <span className="ml-2 relative left-2.5  bg-white text-black font-bold px-3 py-2 rounded-full text-sm  ">
                ➜
              </span>
            </button>

           
            <button
              className="lg:hidden text-2xl border-none bg-transparent cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              ☰
            </button>
          </div>

          <div 
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white p-5 shadow-lg">
              <ul className="flex flex-col gap-4 list-none">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-medium text-black transition-colors hover:text-[#6C63FF] block ${
                        link.isHome ? 'border border-black px-3 py-1 rounded-[14px] inline-block' : ''
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

    
      <section className="bg-[#7ab2ff] rounded-[50px] mx-5 mb-5 py-5">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
           
            <div>
              
             <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-sm">
  <Logo />
  <span
    className="relative font-semibold text-black
  "
  >
    Your health, your choice
  </span>
</div>

           
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-5 text-black">
                Secure Your Doctor Visit Anytime, Anywhere
              </h1>

              <p className="text-lg mb-8 text-black opacity-90">
                Easily schedule a medical consultation with your preferred doctor at a time that suits you
              </p>


<div className="flex flex-row gap-2 mb-10">
  <button
    className="
      flex items-center justify-start 
      bg-black text-white 
      px-4 py-2 sm:px-4.5 sm:py-1 
      text-sm rounded-full font-semibold 
      transition-transform hover:-translate-y-0.5 
    "
  >
    Contact
    <span className="ml-2 relative left-2 md:left-3 bg-white text-black font-bold px-3 py-2 rounded-full text-sm">
      ➜
    </span>
  </button>

  <button
    className="
      w-11 h-11 rounded-full 
      border border-white 
      bg-transparent text-white text-xl 
      cursor-pointer transition-colors 
      flex items-center justify-center mt-1 pr-1 pb-0.5 rotate-60
    "
  >
   &#9665;
  </button>
</div>



              <div className="grid grid-cols-1  sm:grid-cols-3 gap-2 sm:w-[480px] w-80 sm:ml-0 ml-10">
           
                <div className="bg-white/95 p-4 rounded-[14px] text-gray-600 h-40 flex flex-col justify-between">
                  <h3 className="text-sm md:mb-2.5 md:text-start text-center">Latest visited doctors</h3>
                  <div className="flex justify-center md:justify-start my-2.5">
  {doctors.map((doctor, index) => (
    <img
      key={doctor.id}
      src={doctor.img}
      alt={`Doctor ${doctor.id}`}
      className="w-9 h-9 rounded-full border-2 border-white"
      style={{ marginLeft: index === 0 ? 0 : '-10px' }}
    />
  ))}
</div>

                  <p className="text-xs text-gray-600 md:text-start text-center">More than 5k doctors at your services</p>
                </div>

            
                <div className="bg-white/95 rounded-[14px] overflow-hidden h-40">
                  <img
                    src="./doctor_vc.png"
                    alt="Video call"
                    className="w-full h-full object-cover "
                  />
                </div>

               <div className="bg-white/95 p-4 rounded-[14px] text-center text-gray-600 h-40 flex flex-col justify-center">
  <h3 className="text-sm mb-2.5 border border-black rounded-[20px] px-1.5 inline-block mx-auto  md:relative  md:top-10 md:right-8 relative top-12 right-26">
    Statistical
  </h3>

  <div className="relative inline-block my-2 mx-auto">
    <img
      src="./loader.png"
      alt="Background graphic"
      className="inset-0 md:w-200 md:h-full object-contain "
    />
    <div className="text-3xl font-bold text-black md:relative md:bottom-23 relative bottom-22">96%</div>
  </div>

  <p className="text-xs text-gray-600 md:relative md:bottom-8 relative bottom-11">Successful Diagnosis</p>
</div>

              </div>
            </div>

            <div className="hidden lg:block relative top-5 mt-10">
              <img
                src="https://www.transparentpng.com/thumb/doctor/smiling-handsome-doctor-free-png--3kFuBJ.png"
                alt="Doctor"
                className="w-full"
              />
              
            
              <div className="absolute top-20 right-16 bg-white/25 backdrop-blur-md border-2 border-white/40 rounded-full w-32 h-32 flex flex-col items-center justify-center pt-6 animate-[float_3s_ease-in-out_infinite]">
                <span className="text-3xl font-bold text-white leading-none relative bottom-2 left-1">100k+</span>
                <span className="text-sm text-white opacity-90 mt-1 relative bottom-2">Patients</span>
                <span className="absolute bottom-24 left-24 bg-white/50 backdrop-blur-xl border-2 border-white/40 rounded-full w-6 h-6 flex  justify-center text-xs pb-2 text-white">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 text-center bg-[#7ab1ff]/96 mb-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-5">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-5xl lg:text-6xl text-black font-bold">{stat.number}</h2>
              <p className="text-white text-base mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}