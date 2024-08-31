export interface Note {
  id: string;
  title: string;
  content: string;
  timestamp: string;
}

export interface Notification {
  type: "success" | "error" | "info";
  message: string;
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (index: number) => void;
}

export interface NoteItemProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}
export interface NoteFormProps {
  initialData?: Note;
  onSubmit: (data: Omit<Note, "id" | "timestamp">) => void;
  onCancel: () => void;
}
