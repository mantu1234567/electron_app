const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');


const notesFilePath = path.join(__dirname, 'notes.json');

function loadNotesFromFile() {
    try {
        const data = fs.readFileSync(notesFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
       
        return [];
    }
}


ipcMain.on('save-note', (event, note) => {
    const notes = loadNotesFromFile();
    notes.push(note);
    fs.writeFileSync(notesFilePath, JSON.stringify(notes));
    event.reply('note-saved', 'Note saved successfully');
});


ipcMain.handle('load-notes', () => {
    return loadNotesFromFile();
});

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    win.loadFile('index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
