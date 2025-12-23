"use strict";

import React from 'react';
import Image from 'next/image';
import { Star, Clock } from 'lucide-react';

const RestaurantCard = ({ restaurant }) => {
    return (
        <div className="glass-card group cursor-pointer transition-all duration-300 hover:translate-y-[-8px]">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center space-x-1 shadow-md">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-800">{restaurant.rating}</span>
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-lg font-bold mb-1 group-hover:text-zomato-red transition-colors line-clamp-1">
                    {restaurant.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-1">{restaurant.cuisine}</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center text-gray-400 text-xs">
                        <Clock size={14} className="mr-1" />
                        <span>{restaurant.deliveryTime} mins</span>
                    </div>
                    <button className="text-zomato-red font-bold text-sm hover:underline">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
