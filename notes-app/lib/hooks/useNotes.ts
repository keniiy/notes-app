import { Note } from "@/types";
import { useState, useEffect, useCallback } from "react";
import {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../service/NoteService";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadNotes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchNotes();
      setNotes(data);
    } catch (error) {
      setError("Failed to load notes");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addNote = useCallback(async (data: Omit<Note, "id" | "timestamp">) => {
    setError(null);
    try {
      const newNote = await createNote(data);
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (error) {
      setError("Failed to create note");
    }
  }, []);

  const editNote = useCallback(
    async (id: string, data: Partial<Omit<Note, "id" | "timestamp">>) => {
      setError(null);
      try {
        const updatedNote = await updateNote(id, data);
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note.id === id ? updatedNote : note))
        );
      } catch (error) {
        setError("Failed to update note");
      }
    },
    []
  );

  const removeNote = useCallback(async (id: string) => {
    setError(null);
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      setError("Failed to delete note");
    }
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return {
    notes,
    isLoading,
    error,
    loadNotes,
    addNote,
    editNote,
    removeNote,
  };
};
