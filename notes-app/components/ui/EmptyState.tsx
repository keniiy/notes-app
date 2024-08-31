import React from 'react'

const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-10">
      <h3 className="text-xl font-semibold text-gray-500">No notes available</h3>
      <p className="text-gray-400">Start by adding a new note.</p>
    </div>
  )
}

export default EmptyState