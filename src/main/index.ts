import { app, BrowserWindow, protocol } from 'electron';
import createProtocol from './createProtocol';
import mainWindowIpcStart from './lib/mainWindowIpcStart';
import initPouchDB from "./database/initPouchDB";
import pouchDBStart from "./lib/pouchDBStart";


const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow: BrowserWindow|null=null;

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
]);

//获取单例锁
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else{
  const path = require('path');
  global.appDirname = __dirname;
  app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');


  const createWindow=():BrowserWindow=>{
    const win = new BrowserWindow({
      minWidth: 700,
      minHeight: 500,
      frame:false,
      show:false,
      titleBarStyle:"hidden",
      webPreferences: {
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
      },
    });
    if(app.isPackaged){
      createProtocol('app');
      const winURL = 'app://./index.html'
      win.loadURL(`file://${winURL}`).then()
    }else{
      win.loadURL('http://localhost:8083').then();
      win.webContents.openDevTools()
    }
    win.on('closed', () => { mainWindow = null; })
    win.on('ready-to-show', () => { win.show() })
    return win
  }

  app.on("ready",()=>{

    mainWindow = createWindow();
    pouchDBStart(mainWindow);
    mainWindowIpcStart(mainWindow);

  })
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // 当运行第二个实例时,将会聚焦到myWindow这个窗口
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  app.on('quit', () => {
    app.releaseSingleInstanceLock();//释放所有的单例锁
  });

}
