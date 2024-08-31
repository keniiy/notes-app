export interface Note {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
}
export interface Notification {
  type: "success" | "error" | "info";
  message: string;
}

export interface EmptyStateProps {
  message: string;
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (index: number) => void;
}

export interface NoteFormProps {
  onSubmit: (data: Omit<Note, "id">) => void;
  onCancel: () => void;
  initialData?: Omit<Note, "id">;
}

export interface PaginatedResponse<T> {
  data: any;
  docs: T[];
  totalDocs: number;
  limit: number;
  offset: number | null;
  page: number | null;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  pagingCounter: number | null;
}

export interface NoteItemProps {
  note: Note;
  onDelete: () => Promise<void>;
  onView: () => void;
}

export interface NoteViewProps {
  note: Note;
  onClose: () => void;
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (index: number) => void;
}
