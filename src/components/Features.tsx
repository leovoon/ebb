import React from 'react';
import { Bell, Clock, Activity, Shield } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Straight Forward',
    description: 'Simple and clear notifications that tell you exactly when to take a break'
  },
  {
    icon: Clock,
    title: '20-20-20 Tip',
    description: 'Follow the scientifically proven method: every 20 minutes, look 20 feet away for 20 seconds'
  },
  {
    icon: Activity,
    title: 'Stay Away From Screen',
    description: 'Get prompted to completely step away from your device for short periods'
  },
  {
    icon: Shield,
    title: 'Author Tested Effective',
    description: 'Proven methodology developed and tested extensively by our team'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Features That Care for Your Eyes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}