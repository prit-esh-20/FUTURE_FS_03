"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, LogOut, Loader2, MapPin, Phone, Shield } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push('/login');
            } else {
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="animate-spin text-zomato-red" size={48} />
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen pt-32 pb-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card bg-white overflow-hidden"
                >
                    {/* Cover Header */}
                    <div className="h-48 bg-gradient-to-r from-zomato-red to-red-400 relative">
                        <div className="absolute -bottom-16 left-10">
                            <div className="w-32 h-32 rounded-3xl bg-white border-8 border-white shadow-xl flex items-center justify-center overflow-hidden">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-zomato-red">
                                        <User size={64} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 pb-10 px-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                            <div>
                                <h1 className="text-3xl font-extrabold mb-1">{user.displayName || 'Nova User'}</h1>
                                <p className="text-gray-500 flex items-center">
                                    <Mail size={16} className="mr-2" />
                                    {user.email}
                                </p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="mt-6 md:mt-0 flex items-center space-x-2 px-6 py-3 border-2 border-red-100 text-red-500 rounded-xl font-bold hover:bg-red-50 transition-all"
                            >
                                <LogOut size={20} />
                                <span>Log Out</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold">Profile Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                        <Calendar className="text-gray-400 mr-4" size={20} />
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Member Since</p>
                                            <p className="font-semibold">{new Date(user.metadata.creationTime).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                        <Shield className="text-gray-400 mr-4" size={20} />
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Account Status</p>
                                            <p className="font-semibold text-green-500">Verified Nova Member</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold">Preferences</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                        <MapPin className="text-gray-400 mr-4" size={20} />
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Default Location</p>
                                            <p className="font-semibold">New York, USA</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                        <Phone className="text-gray-400 mr-4" size={20} />
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Contact Number</p>
                                            <p className="font-semibold">+1 (555) 000-0000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
