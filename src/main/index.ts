import { app, BrowserWindow, protocol } from 'electron';
import createProtocol from './createProtocol';
import mainWindowIpcStart from './lib/mainWindowIpcStart';
import * as path from "path";

// @ts-ignore
import Store from 'electron-store'
import storeIpcStart from "./lib/storeIpcStart";


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
      win.loadURL(winURL).then()
    }else{

      win.loadURL('http://localhost:8083').then();
      win.webContents.openDevTools()
    }
    win.on('close',(event)=>{
      console.log("close：")
      console.log("主窗口关闭之前")
      event.preventDefault()
      //@todo 发送窗口是否是退出到托盘还是直接退出应用
    })
    win.on('closed', () => {
      console.log("closed：")
      console.log("主窗口已经关闭了")
      mainWindow = null;
    })
    win.on('ready-to-show', () => { win.show() })
    return win
  }

  app.on("ready",()=>{
    mainWindow = createWindow();
    console.log("路径：",app.getPath('userData'))
    let option={
      name:"big_tool_config",//文件名称,默认 config
      fileExtension:"json",//文件后缀,默认json
      cwd:app.getPath('userData'),//文件位置,尽量不要动
//    encryptionKey:"aes-256-cbc" ,//对配置文件进行加密
      clearInvalidConfig:true, // 发生 SyntaxError  则清空配置,
    }
    const  store = new Store(option);
    storeIpcStart(store)
    mainWindowIpcStart(mainWindow);

  })
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // 当运行第二个实例时,将会聚焦到myWindow这个窗口
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  app.on('before-quit',()=>{
    console.log("before-quit:")
    console.log("我退出了")
  })
  app.on('quit', () => {
    console.log("quit:")
    app.releaseSingleInstanceLock();//释放所有的单例锁
  });

}
