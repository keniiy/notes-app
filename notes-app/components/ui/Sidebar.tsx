"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [currentPath, setCurrentPath] = useState<string | null>(null)

  useEffect(() => {
    setIsMounted(true)
    setCurrentPath(window.location.pathname)
  }, [])

  const isActive = (path: string) => currentPath === path

  if (!isMounted) {
    return null
  }

  return (
    <aside className="bg-gray-50 h-screen p-5 shadow-md w-64">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Notes App</h1>
      </div>
      <nav className="space-y-4">
        <Link href="/" className={`block text-lg p-2 rounded ${isActive('/') ? 'bg-primary text-white' : 'text-gray-700 hover:bg-primary hover:text-white'}`}>
          Notes
        </Link>
        <Link href="#" className="block text-lg p-2 rounded text-gray-400 cursor-not-allowed">
          Tasks
        </Link>
        <Link href="#" className="block text-lg p-2 rounded text-gray-400 cursor-not-allowed">
          Announcements
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar