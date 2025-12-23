"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zomato-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <Image src="/images/logo.png" alt="Zomato Nova" width={40} height={40} className="rounded-md" />
                            <span className="text-2xl font-black uppercase">Zomato <span className="text-zomato-red">Nova</span></span>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic text-sm">
                            "Redefining the way you discover food with the power of AI and premium design. Fast, fresh, and futuristic."
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-zomato-red transition-colors">Home</Link></li>
                            <li><Link href="/restaurants" className="text-gray-400 hover:text-zomato-red transition-colors">Restaurants</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-zomato-red transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-zomato-red transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-zomato-red transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-zomato-red transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Connect */}
                    <div>
                        <h4 className="text-xl font-bold mb-6">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-zomato-red transition-all"><Facebook size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-zomato-red transition-all"><Twitter size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-zomato-red transition-all"><Instagram size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-zomato-red transition-all"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2025 Zomato Nova. All rights reserved.</p>
                    <p className="flex items-center mt-4 md:mt-0">
                        Made with <Heart size={14} className="mx-1 text-red-500" /> by Zomato Nova AI Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
