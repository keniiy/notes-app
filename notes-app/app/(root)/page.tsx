import React, { useState } from 'react'
import Header from '../../components/ui/Header'
import Hero from '../../components/ui/Hero'
import FeatureSection from '../../components/ui/FeatureSection'
import Footer from '../../components/ui/Footer'
import Notification from '../../components/ui/Notification'
import { NotificationProvider } from '../../providers/NotificationProvider'
import { useNotes } from '../../lib/hooks/useNotes'
import { Note } from '@/types'
import NoteForm from '@/components/notes/NoteForm'
import NoteItem from '@/components/notes/NoteItem'

const HomePage: React.FC = () => {
  const { notes, isLoading, error, addNote, editNote, removeNote } = useNotes()
  const [isEditing, setIsEditing] = useState(false)
  const [editNoteData, setEditNoteData] = useState<Note | null>(null)

  const handleSaveNote = async (data: Omit<Note, 'id' | 'timestamp'>) => {
    if (editNoteData) {
      await editNote(editNoteData.id, data)
    } else {
      await addNote(data)
    }
    setIsEditing(false)
    setEditNoteData(null)
  }

  const handleEditNote = (note: Note) => {
    setEditNoteData(note)
    setIsEditing(true)
  }

  return (
    <NotificationProvider>
      <Header />
      <Notification />
      <main>
        <Hero />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : notes.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <button
              className="bg-primary text-white p-2 rounded-lg mb-4"
              onClick={() => setIsEditing(true)}
            >
              Add New Note
            </button>
            {isEditing ? (
              <NoteForm
                initialData={editNoteData}
                onSubmit={handleSaveNote}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              notes.map(note => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onEdit={handleEditNote}
                  onDelete={removeNote}
                />
              ))
            )}
          </>
        )}
      </main>
      <FeatureSection
        title="Create and Manage Notes"
        description="Easily create, organize, and manage your notes all in one place."
        link="#notes"
      />
      <FeatureSection
        title="Collaborate with Others"
        description="Share your notes and collaborate with others in real-time."
        link="#collaboration"
      />
      <FeatureSection
        title="Access Anywhere"
        description="Your notes are stored securely and can be accessed from any device."
        link="#access"
      />
      <Footer />
    </NotificationProvider>
  )
}

export default HomePage