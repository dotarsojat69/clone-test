import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (

    <header className="h-screen flex justify-between items-center">
    <div className="lg:ml-28 ml-10 w-full">
      <div className='lg:flex items-center justify-between box-border lg:w-3/4'>
        <div className="lg:order-2 flex justify-end items-center ">
          <img 
            src="/images/heroimg.png" 
            alt="heroimg"
            data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
            className="lg:w-[430px] sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md aos-init aos-animate" />

          <img src="/images/backdrop.png" alt="backdrop" className="-z-10 lg:w-[450px] sm:w-1/2 w-2/3 lg:absolute right-0" />
        </div>
        <div className='lg:w-2/3 lg:mr-0 mr-10 lg:order-1 md:mt-48'>
          <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="easy-in-shine"
              className='sm:text-5xl md:text-6xl text-3xl md:-mt-48 sm:flex flex-col items-start aos-init aos-animate font-orbitron font-bold'>
            <div className='mb-4'>
              Where Code Meets
            </div>
            <span className='font-orbitron font-bold sm:text-5xl md:text-6xl text-3xl text-white bg-[#1e293b] px-5'>Creativity</span>
          </h1>
          <h6 data-aos="fade-right" data-aos-offset="200" data-aos-easing="easy-in-shine" className='font-generalsans font-semibold text-xl my-5 aos-init aos-animate'>
          Harnessing the power of our Coding Collective to build
          solutions for your business needs.
          </h6>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='flex gap-8 items-center aos-init aos-animate'>
          <div className='flex justify-start w-full'>
            <button className="bg-[#1e293b] text-white rounded-md py-2 px-4 font-medium font-generalsans
            shadow-custom-drop text-bgbase hover:scale-110 transition-all hover:shadow-primary-600 hover:shadow-md">
              Get a free consult
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
    };
    
    export default HeroSection;
    
