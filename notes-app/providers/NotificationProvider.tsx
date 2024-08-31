import React, { createContext, useContext, useState } from 'react'

interface Notification {
  type: 'success' | 'error' | 'info'
  message: string
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Notification) => void
  removeNotification: (index: number) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}


export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (notification: Notification) => {
    setNotifications([...notifications, notification])
    setTimeout(() => {
      removeNotification(0)
    }, 3000)
  }

  const removeNotification = (index: number) => {
    setNotifications(notifications.filter((_, i) => i !== index))
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}