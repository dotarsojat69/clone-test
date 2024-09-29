import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <div className="flex space-x-4">
            <MapPin className="w-6 h-6" />
            <Mail className="w-6 h-6" />
            <Phone className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Hi there, how can we help?</h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 mb-4 bg-gray-100 rounded"
              />
              <input
                type="email"
                placeholder="Yourmail@example.com"
                className="w-full p-2 mb-4 bg-gray-100 rounded"
              />
              <textarea
                placeholder="Ask Our About Services"
                className="w-full p-2 mb-4 bg-gray-100 rounded h-32"
              ></textarea>
              <div className="mb-4">
                <p className="mb-2">Where Did You Hear About Us?</p>
                <div className="flex flex-wrap gap-4">
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
          <div className="lg:w-1/2">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
              <img
                src="/api/placeholder/600/400"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;