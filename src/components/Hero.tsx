import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Take Care of Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Eyes
            </span>{' '}
            While Using Your Phone
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Eye Break Buddy reminds you to take regular breaks and provides eye exercises
            to reduce digital eye strain.
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Download Now
            <ArrowDown className="w-5 h-5" />
          </a>
          <div className="mt-12 relative max-w-md w-full">
            <img
              src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&w=800&q=80"
              alt="Phone showing alert screen"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
              <div className="bg-white/95 p-6 m-4 rounded-xl text-center">
                <h3 className="text-xl font-bold text-red-600 mb-2">Time for an Eye Break!</h3>
                <p className="text-gray-800">Look 20 feet away for 20 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}