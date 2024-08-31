import { NoteFormProps } from '@/types'
import React, { useState, useEffect } from 'react'

const NoteForm: React.FC<NoteFormProps> = ({ initialData, onSubmit, onCancel }) => {
    const [title, setTitle] = useState(initialData?.title || '')
    const [content, setContent] = useState(initialData?.content || '')
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (!title || !content) return
      onSubmit({ title, content })
      setTitle('')
      setContent('')
    }
  
    useEffect(() => {
      if (initialData) {
        setTitle(initialData.title)
        setContent(initialData.content)
      }
    }, [initialData])
  
    return (
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto animate-fadeIn">
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="content">Content</label>
          <textarea
            id="content"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button 
            type="button" 
            onClick={onCancel} 
            className="bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-500 transition">
            Cancel
          </button>
          <button 
            type="submit" 
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
            Save
          </button>
        </div>
      </form>
    )
  }
  
  export default NoteForm