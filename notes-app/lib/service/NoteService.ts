import { Note } from "@/types";

const BASE_URL = "/api/notes";

export const fetchNotes = async (): Promise<Note[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }
  return response.json();
};

export const createNote = async (
  data: Omit<Note, "id" | "timestamp">
): Promise<Note> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create note");
  }
  return response.json();
};

export const updateNote = async (
  id: string,
  data: Partial<Omit<Note, "id" | "timestamp">>
): Promise<Note> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to update note");
  }
  return response.json();
};

export const deleteNote = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete note");
  }
};
