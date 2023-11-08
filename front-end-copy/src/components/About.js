import React from 'react';
import { useSelector } from 'react-redux';

function About() {
  const value = useSelector((state) => state.primary); 
  const value2 = useSelector((state) => state.secondary); 
  
  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          About Us
        </h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <p className="text-lg text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
              sem eget lacus maximus fermentum. Vivamus a diam eu justo
              scelerisque tincidunt ut id erat.
            </p>
            <p className="mt-4 text-lg text-gray-700 text-center">
              Phasellus auctor venenatis libero, vel bibendum ipsum vehicula id.
              Praesent a libero et ex bibendum cursus. Nullam tristique dui non
              urna euismod, nec sodales ligula efficitur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
