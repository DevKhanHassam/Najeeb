import React from 'react';
import { Truck, Package, Globe2, Clock, Phone, Mail, MapPin, Shield, Crown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center text-white">
            <Crown className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">Prinz</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Prinz Logistics Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Delivering excellence across continents with precision and reliability
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Truck className="w-12 h-12 text-blue-600" />}
              title="Ground Transport"
              description="Efficient and reliable ground transportation solutions across Germany"
            />
            <ServiceCard
              icon={<Globe2 className="w-12 h-12 text-blue-600" />}
              title="Global Shipping"
              description="International shipping services with worldwide coverage"
            />
            <ServiceCard
              icon={<Package className="w-12 h-12 text-blue-600" />}
              title="Warehousing"
              description="State-of-the-art warehousing and distribution facilities"
            />
            <ServiceCard
              icon={<Clock className="w-12 h-12 text-blue-600" />}
              title="Express Delivery"
              description="Time-critical delivery services for urgent shipments"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-10 h-10 text-blue-600" />}
              title="Reliable & Secure"
              description="Your cargo's safety is our top priority with real-time tracking and insurance coverage"
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-blue-600" />}
              title="On-Time Delivery"
              description="We pride ourselves on punctual deliveries and meeting deadlines"
            />
            <FeatureCard
              icon={<Globe2 className="w-10 h-10 text-blue-600" />}
              title="Global Network"
              description="Extensive network of partners ensuring seamless worldwide logistics"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ContactInfo
              icon={<Mail className="w-8 h-8" />}
              title="Email"
              info="Najeeb@amazon.de"
            />
            <ContactInfo
              icon={<MapPin className="w-8 h-8" />}
              title="Location"
              info="Erfurt DTH1"
            />
            <ContactInfo
              icon={<Crown className="w-8 h-8" />}
              title="Company"
              info="Prinz Logistics GmbH"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Crown className="w-6 h-6 mr-2" />
            <span className="text-xl font-bold">Prinz</span>
          </div>
          <p>© 2025 Prinz Logistics GmbH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{info}</p>
    </div>
  );
}

export default App;