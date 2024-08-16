import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <div className="bg-white text-gray-900 p-6">
        <div className="text-2xl font-bold text-red-600 mb-4">Home / Contact</div>
        <div className="flex gap-6">
          <div className="w-1/2">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="bg-red-600 text-white p-3 rounded-full mr-2">
                  <IoCallOutline className="text-xl" />
                </div>
                <p className="text-xl font-semibold text-red-600">Call To Us</p>
              </div>
              <p className="text-gray-700 mb-1">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-700">Phone: +8801611112222</p>
              <hr className="my-4 border-red-600" />
              <div className="flex items-center mb-2">
                <div className="bg-red-600 text-white p-3 rounded-full mr-2">
                  <GoMail className="text-xl" />
                </div>
                <p className="text-xl font-semibold text-red-600">Write To Us</p>
              </div>
              <p className="text-gray-700 mb-1">Fill out our form and we will contact you within 24 hours</p>
              <p className="text-gray-700">Emails: customer@exclusive.com</p>
              <p className="text-gray-700">Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="w-1/2">
            <form className="space-y-4">
              <div className="flex flex-col space-y-4">
                <input type="text" placeholder="Your Name *" className="p-3 border-2 border-red-600 rounded focus:border-red-400 focus:outline-none" />
                <input type="email" placeholder="Your Email *" className="p-3 border-2 border-red-600 rounded focus:border-red-400 focus:outline-none" />
                <input type="tel" placeholder="Your Phone *" className="p-3 border-2 border-red-600 rounded focus:border-red-400 focus:outline-none" />
              </div>
              <textarea name="message" placeholder="Your Message" className="p-3 border-2 border-red-600 rounded focus:border-red-400 focus:outline-none resize-none h-40" />
              <input type="submit" className="bg-red-600 text-white p-3 rounded cursor-pointer hover:bg-red-700 transition duration-300" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
