import React from 'react';
import { Note } from '@/types';

interface NoteViewProps {
  note: Note;
  onClose: () => void;
}

const NoteView: React.FC<NoteViewProps> = ({ note, onClose }) => {
  const formattedDate = note.timestamp
    ? new Date(note.timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Invalid Date';

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
      <div className="w-full text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          fill="none"
          className="w-1/2 mx-auto mb-4"
        >
          <circle cx="512" cy="512" r="512" fill="#E6F7FF" />
          <rect x="200" y="300" width="600" height="400" rx="50" fill="#FFFFFF" />
          <rect x="250" y="350" width="500" height="50" fill="#FFD700" />
          <rect x="250" y="450" width="500" height="200" fill="#FFD700" />
          <path
            d="M300 600 H700"
            stroke="#FF8C00"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <circle cx="400" cy="700" r="25" fill="#FF8C00" />
          <circle cx="624" cy="700" r="25" fill="#FF8C00" />
          <path
            d="M380 320 L480 220 L580 320"
            fill="none"
            stroke="#FF8C00"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </svg>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">{note.title || 'Untitled Note'}</h2>
        <p className="text-gray-600 mb-4">{note.content || 'No content available.'}</p>
        <p className="text-sm text-gray-400">{formattedDate}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NoteView;