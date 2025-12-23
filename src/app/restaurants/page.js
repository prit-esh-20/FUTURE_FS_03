"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { restaurants as allRestaurants } from '@/lib/seedData';
import RestaurantCard from '@/components/RestaurantCard';

export default function RestaurantsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCuisine, setActiveCuisine] = useState('All');

    const cuisines = ['All', 'Chinese', 'Italian', 'Indian', 'Fast Food', 'Healthy', 'Seafood'];

    const filteredRestaurants = allRestaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCuisine = activeCuisine === 'All' || restaurant.cuisine.includes(activeCuisine);
        return matchesSearch && matchesCuisine;
    });

    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Discover Restaurants</h1>
                    <p className="text-gray-500 mb-10 max-w-2xl">
                        Browse through our hand-picked selection of the finest restaurants, delivered straight to your door with Nova AI precision.
                    </p>

                    {/* Search and Filter Bar */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center mb-10">
                        <div className="relative w-full md:flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for restaurants, cuisines..."
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-zomato-red focus:bg-white outline-none transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="flex items-center space-x-2 px-6 py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-all w-full md:w-auto justify-center">
                            <SlidersHorizontal size={20} />
                            <span>More Filters</span>
                        </button>
                    </div>

                    {/* Cuisine Pill Filters */}
                    <div className="flex overflow-x-auto pb-4 scrollbar-hide space-x-3 mb-12">
                        {cuisines.map((cuisine) => (
                            <button
                                key={cuisine}
                                onClick={() => setActiveCuisine(cuisine)}
                                className={`flex-shrink-0 px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${activeCuisine === cuisine
                                    ? 'bg-zomato-red border-zomato-red text-white shadow-lg shadow-zomato-red/20'
                                    : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200'
                                    }`}
                            >
                                {cuisine}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Grid */}
                {filteredRestaurants.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredRestaurants.map((restaurant, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                            >
                                <RestaurantCard restaurant={restaurant} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <div className="text-6xl mb-6">🍽️</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">No restaurants found</h2>
                        <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setActiveCuisine('All'); }}
                            className="mt-6 text-zomato-red font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
