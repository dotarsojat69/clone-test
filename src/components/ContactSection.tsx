import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-white m-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold font-orbitron">Contact Us</h1>
          <div className="md:flex sm:gap-20 gap-10 justify-center items-center xl:mr-20 md:mt-0 xl:mt-10">
            <a href="https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A">
                <MapPin className="w-6 h-6" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@co2labs.com">
                <Mail className="w-6 h-6" />
            </a>
            <a href="">
                <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 justify-evenly">
          <div className="lg:w-2/5 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 font-generalsans">Hi there, how can we help?</h3>
            <form className='items-center justify-center'>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 mb-4 bg-gray-200 rounded font-generalsans items-center justify-center"
              />
              <input
                type="email"
                placeholder="Yourmail@example.com"
                className="w-full p-4 mb-4 bg-gray-200 rounded font-generalsans"
              />
              <textarea
                placeholder="Ask Our About Services"
                className="w-full p-4 mb-4 bg-gray-200 rounded h-32 font-generalsans"
              ></textarea>
              <div className="mb-4">
                <p className="mb-2 font-generalsans">Where Did You Hear About Us?</p>
                <div className="flex flex-wrap gap-4 font-generalsans">
                  {['Linkedin', 'Instagram', 'Job Ads', 'Events and Seminars', 'Other'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input type="radio" name="source" className="mr-2" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#1e293b] text-white px-6 py-2 rounded hover:bg-opacity-90 transition"
              >
                Send
              </button>
            </form>
          </div>
          <div className="lg:w-2/5">
            <div className="rounded-lg overflow-hidden h-[550px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.4776136128512!2d103.8008668418283!3d1.274634948208806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2sen!4v1721874615960!5m2!1sen!2sen&hl=en"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;