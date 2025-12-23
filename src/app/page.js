"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Crown, ArrowRight, Star } from 'lucide-react';
import { features, restaurants, testimonials, heroData } from '@/lib/seedData';
import RestaurantCard from '@/components/RestaurantCard';

const iconMap = {
  sparkles: <Sparkles className="text-white" size={24} />,
  zap: <Zap className="text-white" size={24} />,
  crown: <Crown className="text-white" size={24} />
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent -z-10" />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-red-100/50 rounded-full blur-3xl -z-10 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                {heroData.title.split(' ').map((word, i) => (
                  <span key={i} className={word === 'Future' || word === 'Food' ? 'text-zomato-red' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                {heroData.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/restaurants" className="btn-primary text-center flex items-center justify-center space-x-2">
                  <span>{heroData.ctaText}</span>
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-lg font-semibold hover:border-zomato-red hover:text-zomato-red transition-all text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square md:aspect-auto md:h-[600px] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
                alt="Premium Food"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 animate-bounce-slow bg-white/90 backdrop-blur-xl border-white/50 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200">
                    <Zap size={24} fill="white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Super Fast Delivery</p>
                    <div className="inline-block bg-zomato-red px-3 py-1 rounded-full shadow-sm">
                      <p className="text-xs font-black text-white uppercase tracking-widest whitespace-nowrap">
                        Under 20 mins guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Zomato Nova?</h2>
            <div className="w-20 h-1 bg-zomato-red mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-zomato-red rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-zomato-red/20">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Popular Near You</h2>
              <p className="text-gray-500">Explore the top-rated dining spots curated by Nova AI.</p>
            </div>
            <Link href="/restaurants" className="mt-6 md:mt-0 text-zomato-red font-bold flex items-center space-x-1 hover:underline">
              <span>View all restaurants</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.slice(0, 3).map((restaurant, idx) => (
              <RestaurantCard key={idx} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zomato-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What Our Users Say</h2>
            <p className="text-gray-400">Join thousands of happy foodies on Zomato Nova.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-card bg-white/10 border-white/10 p-10"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-8 leading-relaxed">"{testi.review}"</p>
                <p className="font-bold text-zomato-red">— {testi.userName}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Hungry? Let's Find Your Next Meal.</h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Get started today and experience the most premium food discovery platform ever built.
          </p>
          <Link href="/register" className="btn-primary inline-flex items-center space-x-3 px-10 py-4 text-lg">
            <span>Join Zomato Nova</span>
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
