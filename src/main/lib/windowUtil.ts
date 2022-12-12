import {BrowserWindow} from 'electron'
export const handWin = (win:BrowserWindow,type:"min"|"close") => {
    if(type==="min"){
        win.minimize()
    }
    if (type === "close"){
        win.close()
    }

}