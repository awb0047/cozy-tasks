import {app, BrowserWindow, ipcMain} from "electron"
import path from "path"

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 500,
        frame: false,
        transparent: true,
        title: "Cozy Tasks",
        icon: path.join(app.getAppPath(), "/src/assets/Logo_t.ico"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"))
})

ipcMain.on('close', () => {
    app.quit()
})

ipcMain.on('minimize', () => {
    BrowserWindow.getFocusedWindow().minimize()
})