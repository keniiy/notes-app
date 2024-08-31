import React, { useState } from 'react';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';
import NoteView from './NoteView';
import { useNotes } from '../../lib/hooks/useNotes';
import Loader from '../ui/Loader';
import EmptyState from '../ui/EmptyState';
import { Note } from '@/types';

const NotesLayout: React.FC = () => {
  const { notes, pagination, isLoading, error, setPage, addNote, removeNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [viewingNote, setViewingNote] = useState<Note | null>(null);


  const handleSaveNote = async (data: Omit<Note, "id">) => {
    await addNote(data);
    setIsEditing(false);
  };

  const handleNextPage = () => {
    if (pagination?.hasNextPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination?.hasPrevPage) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex h-full">
      <div className="w-1/3 p-4 border-r overflow-y-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Notes</h2>
          <button
            onClick={() => {
              setIsEditing(true);
              setViewingNote(null);
            }}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            Add Note
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : notes.length === 0 ? (
          <EmptyState message="No notes have been uploaded yet." />
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={() => removeNote(note.id)}
              onView={() => setViewingNote(note)}
            />
          ))
        )}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            disabled={!pagination?.hasPrevPage}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={!pagination?.hasNextPage}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-2/3 p-4">
        {isEditing ? (
          <NoteForm
            onSubmit={handleSaveNote}
            onCancel={() => setIsEditing(false)}
          />
        ) : viewingNote ? (
          <NoteView
            note={viewingNote}
            onClose={() => setViewingNote(null)}
          />
        ) : (
          <EmptyState message="Select a note to view its details." />
        )}
      </div>
    </div>
  );
};

export default NotesLayout;