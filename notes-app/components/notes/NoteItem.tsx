import React from 'react'
import { NoteItemProps } from '@/types'


const NoteItem: React.FC<NoteItemProps> = ({ note, onEdit, onDelete }) => {
    return (
      <div className="p-4 bg-white shadow rounded-lg mb-4">
        <h2 className="text-lg font-bold">{note.title}</h2>
        <p className="text-gray-700">{note.content}</p>
        <p className="text-sm text-gray-500">{new Date(note.timestamp).toLocaleString()}</p>
        <div className="flex justify-end space-x-2 mt-2">
          <button 
            onClick={() => onEdit(note)} 
            className="text-blue-600 hover:text-blue-800 transition">
            Edit
          </button>
          <button 
            onClick={() => onDelete(note.id)} 
            className="text-red-600 hover:text-red-800 transition">
            Delete
          </button>
        </div>
      </div>
    )
  }
  
  export default NoteItem