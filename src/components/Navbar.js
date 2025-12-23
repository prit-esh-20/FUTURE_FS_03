"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            unsubscribe();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Restaurants', href: '/restaurants' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/images/logo.png" alt="Zomato Nova" width={50} height={50} className="h-12 w-auto rounded-lg shadow-sm" />
                        <span className="text-xl font-black tracking-tight text-zomato-dark uppercase">Zomato <span className="text-zomato-red">Nova</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="nav-link">
                                {link.name}
                            </Link>
                        ))}
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link href="/profile" className="flex items-center space-x-1 nav-link">
                                    <User size={18} />
                                    <span>Profile</span>
                                </Link>
                                <button onClick={handleLogout} className="flex items-center space-x-1 text-gray-600 hover:text-red-500 font-medium">
                                    <LogOut size={18} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link href="/login" className="text-gray-600 hover:text-zomato-red font-medium">Login</Link>
                                <Link href="/register" className="btn-primary py-2 px-5">Sign Up</Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass-nav absolute top-full left-0 w-full p-4 space-y-4 shadow-xl border-t border-gray-100">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block nav-link text-lg">
                            {link.name}
                        </Link>
                    ))}
                    {user ? (
                        <>
                            <Link href="/profile" onClick={() => setIsOpen(false)} className="block nav-link text-lg">Profile</Link>
                            <button onClick={handleLogout} className="block w-full text-left text-red-500 font-medium text-lg">Logout</button>
                        </>
                    ) : (
                        <div className="space-y-3 pt-2">
                            <Link href="/login" onClick={() => setIsOpen(false)} className="block nav-link text-lg">Login</Link>
                            <Link href="/register" onClick={() => setIsOpen(false)} className="btn-primary block text-center py-3">Sign Up</Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
