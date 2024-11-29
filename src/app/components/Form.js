'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import { useFetch } from '../utils/constants';

const Form = () => {
    const router = useRouter();
    const { loading, submitForm } = useFetch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await submitForm(event, router);
    };

    return (
        <motion.div
            id="contact"
            className="flex items-center flex-col w-full py-24 px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }} // Animation triggers only once
        >
            <motion.h2
                className="solid-heading text-3xl sm:text-4xl md:text-5xl font-bold poppins text-center mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
            >
                Contact Me
            </motion.h2>
            <motion.p
                className="text-2xl sm:text-3xl text-gray-600 mb-6 sm:mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
            >
                Let’s make something great together
            </motion.p>
            <motion.form
                className="shadow-lg bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-xl md:max-w-2xl flex flex-col border border-gray-100"
                id="contactform"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <motion.div
                        className="flex flex-col w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <label
                            htmlFor="name"
                            className="text-lg font-semibold solid-heading mb-2"
                        >
                            Full Name
                        </label>
                        <input
                            disabled={loading}
                            required
                            placeholder="Full Name"
                            name="name"
                            type="text"
                            id="name"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-col w-full"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <label
                            htmlFor="email"
                            className="text-lg font-semibold solid-heading mb-2"
                        >
                            Email
                        </label>
                        <input
                            disabled={loading}
                            required
                            placeholder="Email"
                            name="email"
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className="flex flex-col w-full mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <label
                        htmlFor="subject"
                        className="text-lg font-semibold solid-heading mb-2"
                    >
                        Subject
                    </label>
                    <input
                        disabled={loading}
                        required
                        placeholder="Your Subject"
                        name="_subject"
                        type="text"
                        id="subject"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </motion.div>
                <motion.div
                    className="flex flex-col w-full mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <label
                        htmlFor="comment"
                        className="text-lg font-semibold solid-heading mb-2"
                    >
                        Your Message
                    </label>
                    <textarea
                        disabled={loading}
                        required
                        placeholder="Your message"
                        name="comment"
                        id="comment"
                        rows="5"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </motion.div>
                <input name="_formsubmit_id" type="text" className="hidden" />
                <motion.button
                    value="Submit"
                    type="submit"
                    disabled={loading}
                    className={`mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition duration-300 ${loading ? 'cursor-not-allowed' : ''}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {loading ? (
                        <div className='loader-container'>                        <span className="loader"></span>
                        </div>
                    ) : (
                        'Submit'
                    )}
                </motion.button>

            </motion.form>
        </motion.div>
    );
};

export default Form;
