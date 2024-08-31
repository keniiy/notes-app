# Notes Feature

This is a simple notes application built with Next.js and TypeScript. The feature allows users to create, view, delete, and paginate through notes. Each note contains a title, content, and a timestamp.

## Features

- **Create Note**: Add new notes with a title, content, and timestamp.
- **View Notes**: Display a list of all notes with pagination support.
- **Delete Note**: Remove notes from the list.
- **Pagination**: Browse through notes with previous and next buttons.
- **Notifications**: Inform users of success or failure operations using the notification system.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14.x or later)
- npm or yarn
- A running instance of the backend API

## Getting Started

Follow the steps below to get started with the Notes feature:

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Install Dependencies

Install the necessary packages using npm or yarn:

```bash
npm install
```

### 3. Configure Environment Variables

Create a .env.local file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

Replace http://localhost:3000 with your backend API’s base URL if it is running on a different port or environment.

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

### 5. Using the Feature

	•	Add a Note: Click on the “Add Note” button, fill in the title, content, and timestamp, then save.
	•	View Notes: The notes will be displayed in a list format. You can view individual notes by clicking “View”.
	•	Delete Notes: Click “Delete” to remove a note.
	•	Pagination: Use the “Previous” and “Next” buttons to navigate through the notes.


### Happy coding ;)