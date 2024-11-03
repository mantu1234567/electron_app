## Electron Notes App
A simple note-taking application built with Electron.js. This app allows users to write, save, and display notes, with persistent storage using JSON or local storage.
## Screensshort
![Screenshot 2024-11-03 205022](https://github.com/user-attachments/assets/507e2922-5abd-473f-bea5-70554c5cb36d)

## Features
 1-Note-Taking Interface: A text area for writing notes.

2-Note List: A list view to display saved notes.

3-Persistent Storage: Notes are stored persistently using JSON files or local storage.

4-Edit/View Mode: Easily view or edit existing notes by selecting from the list.

## Setup
git clone https://github.com/your-username/Electron_Notes_App.git

cd Electron_Notes_App

npm install

npm start

## Usage
Writing a Note: Start typing in the text area.

Saving a Note: Click the Save button to save your note. Saved notes appear in the list view on the left.

Viewing/Editing a Note: Click on any saved note in the list view to display it in the text area for viewing or editing.

## Project Structure

Electron_Notes_App/

├── main.js                   # Main process (Electron)

├── index.html                 # Renderer process HTML

├── renderer.js               # Renderer process JavaScript

├── style.css                 # Styles for the application

├── notes.json               # File for storing notes (if using JSON storage)

├── package.json             # Project metadata and dependencies

└── README.md                # Project documentation

## Technical Details
Electron.js: Manages the main and renderer processes.

Main Process: main.js is the entry point, responsible for creating the application window and initializing the app.

Renderer Process: renderer.js handles UI interactions, saving notes, and loading saved notes from storage.

Persistent Storage: Notes are saved either in notes.json (for JSON storage) or using local storage.

## Key Files
main.js: Sets up the main Electron process and creates the application window.

renderer.js: Manages the UI interactions like saving notes and loading them on start.

notes.json (optional): Stores notes if using JSON file storage instead of local storage.

## Screenshots
![Screenshot 2024-11-03 205022](https://github.com/user-attachments/assets/3fae5f7d-2644-4c80-8748-de392b9df38d)

## Contributing
Fork the repository.

Create a new branch for your feature (git checkout -b feature/your-feature-name).

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature/your-feature-name).

Open a pull request.
