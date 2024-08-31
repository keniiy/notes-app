import React from 'react'

interface FeatureSectionProps {
  title: string
  description: string
  link: string
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, link }) => {
  return (
    <section className="py-10 bg-gray-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
        <a href={link} className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition">
          Learn More
        </a>
      </div>
    </section>
  )
}

export default FeatureSection