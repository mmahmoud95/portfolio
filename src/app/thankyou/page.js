import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';
const ThankYouPage = () => {
  return (
    <AnimatedSection>
      <div className="min-h-screen flex flex-col items-center justify-center  text-center px-6 relative">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg relative -mt-32">
          <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Thank You!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We appreciate you taking the time to reach out. Your message has been received, and we will get back to you as soon as possible.
          </p>
          <p className=" transition-all duration-700 ease-in-out text-gray-600 mb-8">
            If your inquiry is urgent, please contact us directly at{' '}
            <Link
              href="https://api.whatsapp.com/send?phone=201152910495"
              className=" underline hover:text-blue-700 inline-block mt-2"
            >
              +201152910495{"  "}<FaWhatsapp className='text-green-700 inline-block text-xl hover:text-green-500' />
            </Link>.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </AnimatedSection>);
};

export default ThankYouPage;
