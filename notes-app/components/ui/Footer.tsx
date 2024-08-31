import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 p-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Notes App. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer