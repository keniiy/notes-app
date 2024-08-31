import React from 'react';
import { Note } from '@/types';

interface NoteItemProps {
  note: Note;
  onDelete: () => Promise<void>;
  onView: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete, onView }) => {
  const formattedDate = new Date(note.timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-gray-600">{note.content}</p>
      <p className="text-sm text-gray-500 mt-2">{formattedDate}</p>
      <div className="flex justify-end mt-4">
        <button
          onClick={onView}
          className="text-blue-500 hover:underline mr-4"
        >
          View
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;