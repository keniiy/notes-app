// components/ui/Notification.tsx
import React from 'react'
import { useNotification } from '../../providers/NotificationProvider'

const Notification: React.FC = () => {
  const { notifications } = useNotification()

  return (
    <div className="fixed top-4 right-4 space-y-2">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-lg ${
            notification.type === 'success'
              ? 'bg-green-500'
              : notification.type === 'error'
              ? 'bg-red-500'
              : 'bg-blue-500'
          } text-white`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  )
}

export default Notification