import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Notes App</h1>
        <p className="text-xl mb-6">Capture, Organize, and Share Your Ideas Effortlessly</p>
        <a href="#features" className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
          Explore Features
        </a>
      </div>
    </section>
  )
}

export default Hero