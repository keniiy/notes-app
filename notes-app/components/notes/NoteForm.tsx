import React, { useState } from 'react';
import { Note, NoteFormProps } from '@/types';



const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [timestamp, setTimestamp] = useState<string>(
    initialData?.timestamp ? new Date(initialData.timestamp).toISOString().substring(0, 10) : ''
  );

  const handleSubmit = () => {
    if (!title || !content || !timestamp) {
      alert('All fields are required!');
      return;
    }

    const noteData: Omit<Note, 'id'> = {
      title,
      content,
      timestamp: new Date(timestamp),
    };

    onSubmit(noteData);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Timestamp</label>
        <input
          type="date"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="flex justify-end">
        <button onClick={onCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
          Cancel
        </button>
        <button onClick={handleSubmit} className="bg-primary text-white px-4 py-2 rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default NoteForm;