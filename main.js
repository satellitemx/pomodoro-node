const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 150,
        useContentSize: true,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
    })

    win.loadFile("index.html")
}

app.whenReady().then(createWindow)