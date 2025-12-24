"use client";
export const dynamic = "force-dynamic";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await addDoc(collection(db, 'contactMessages'), {
                ...formData,
                timestamp: serverTimestamp()
            });
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error("Error adding document: ", err);
            setError("Failed to send message. Please check your Firebase settings.");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        Get in <span className="text-zomato-red">Touch</span>
                    </motion.h1>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto">
                        Have a question about Zomato Nova? We're here to help you experience the future of food discovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-10"
                    >
                        <div className="glass-card p-10 bg-zomato-dark text-white">
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Mail className="text-zomato-red" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-lg font-medium">hello@zomatonova.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Phone className="text-zomato-red" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-lg font-medium">+1 (234) 567-890</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                        <MapPin className="text-zomato-red" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                                        <p className="text-lg font-medium">123 Future Tech Plaza, Nova City, 90210</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-red-50 rounded-3xl">
                            <h4 className="font-bold text-xl mb-4">Our Commitment</h4>
                            <p className="text-gray-600 leading-relaxed italic">
                                "At Zomato Nova, we're not just building a platform; we're crafting experiences. Our team is dedicated to providing you with the best AI-driven food discovery journey."
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass-card p-10 md:p-12 shadow-2xl relative"
                    >
                        {submitted ? (
                            <div className="text-center py-12">
                                <CheckCircle className="mx-auto text-green-500 mb-6" size={80} />
                                <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                                <p className="text-gray-500 mb-10">
                                    Thank you for reaching out. Our team will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="btn-primary"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-zomato-red focus:bg-white outline-none transition-all"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-zomato-red focus:bg-white outline-none transition-all"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-zomato-red focus:bg-white outline-none transition-all resize-none"
                                        placeholder="How can we help you today?"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                {error && (
                                    <p className="text-red-500 text-sm font-medium">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full btn-primary py-5 text-lg flex items-center justify-center space-x-3"
                                >
                                    {loading ? <Loader2 className="animate-spin" /> : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
