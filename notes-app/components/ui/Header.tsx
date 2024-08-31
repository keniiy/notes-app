"use client";

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Notes App</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Updates</a>
          <a href="#" className="hover:underline">Share</a>
        </nav>
      </div>
    </header>
  )
}

export default Header