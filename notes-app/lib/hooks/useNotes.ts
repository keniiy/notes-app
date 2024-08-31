import { useState, useEffect, useCallback } from "react";
import { Note, PaginatedResponse } from "@/types";
import { fetchNotes, createNote, deleteNote } from "../service/NoteService";
import { useNotification } from "@/providers/NotificationProvider";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [pagination, setPagination] = useState<PaginatedResponse<Note> | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { notify } = useNotification();

  const loadNotes = useCallback(
    async (page: number, limit: number) => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchNotes(page, limit);
        setNotes(data.data.docs);
        setPagination(data.data);
      } catch (error) {
        setError("Failed to load notes");
        notify("Failed to load notes", "error");
      } finally {
        setIsLoading(false);
      }
    },
    [notify]
  );

  useEffect(() => {
    loadNotes(page, limit);
  }, [page, limit, loadNotes]);

  const addNote = useCallback(
    async (data: Omit<Note, "id">) => {
      setError(null);
      try {
        const newNote = await createNote({
          ...data,
          timestamp: new Date(data.timestamp),
        });
        setNotes((prevNotes) => [...prevNotes, newNote]);
        notify("Note added successfully!", "success");
      } catch (error) {
        setError("Failed to create note");
        notify("Failed to create note", "error");
      }
    },
    [notify]
  );

  const removeNote = useCallback(
    async (id: string) => {
      setError(null);
      try {
        await deleteNote(id);
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        notify("Note deleted successfully!", "success");
      } catch (error) {
        setError("Failed to delete note");
        notify("Failed to delete note", "error");
      }
    },
    [notify]
  );

  return {
    notes,
    pagination,
    isLoading,
    error,
    setPage,
    setLimit,
    loadNotes,
    addNote,
    removeNote,
  };
};
