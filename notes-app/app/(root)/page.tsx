"use client";

import React from 'react'
import Header from '../../components/ui/Header'
import Sidebar from '../../components/ui/Sidebar'
import NotesLayout from '../../components/notes/NotesLayout'
import { NotificationProvider } from '../../providers/NotificationProvider'
import Notification from '../../components/ui/Notification'

const HomePage: React.FC = () => {
  return (
    <NotificationProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-4">
            <Notification />
            <NotesLayout />
          </main>
        </div>
      </div>
    </NotificationProvider>
  )
}

export default HomePage