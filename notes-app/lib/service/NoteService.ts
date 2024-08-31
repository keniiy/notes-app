import { API_BASE_URL } from "../config";
import { Note, PaginatedResponse } from "@/types";

export const fetchNotes = async (
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<Note>> => {
  const response = await fetch(
    `${API_BASE_URL}/notes?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return await response.json();
};

export const createNote = async (data: Omit<Note, "id">): Promise<Note> => {
  const response = await fetch(`${API_BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return await response.json();
};

export const deleteNote = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete note");
  }
};
