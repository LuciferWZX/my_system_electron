import {app, BrowserWindow, ipcMain} from "electron";

const PouchDB = require("pouchdb")
PouchDB.plugin(require('pouchdb-find'))
const getPath = (database:string):string => {
    let databasePath = `log/${database}`
    if(app.isPackaged){
        const LOG_PATH = app.getPath("logs");
        databasePath = `${LOG_PATH}/${database}`
    }
    return databasePath

}
export default (win:BrowserWindow)=>{

    PouchDB.on('created', function (dbName:string) {
        // called whenever a db is created.
        console.log (`数据库:${dbName} 创建成功.`)
    });
    PouchDB.on('destroyed', function (dbName:string) {
        // called whenever a db is destroyed.
        console.log (`数据库:${dbName} 销毁成功.`)
    });
    ///查询该database的所有数据
    ipcMain.handle("db_get_all",async (event, dbName:string)=>{
        const db = new PouchDB(getPath(dbName))
        try {
            const res =await db.allDocs({
                include_docs:true
            })
            console.log(`${dbName}所有数据:`,res.rows)
            return res.rows
        }catch (e){
            console.log("db_get_all出错:",e?.message)
        }finally {
            await db.close();
        }
    })
    ///根据条件筛选数据
    ipcMain.handle("db_find",async (event, dbName:string,config:{
        selector?:Map<string,any>
        fields?:string[],
        sort?:string[]
    })=>{
        const db = new PouchDB(getPath(dbName))
        try {
            const res =await db.find(config)
            console.log(`${dbName}查询到的数据:`,res)
            return res.docs
        }catch (e){
            console.log("db_find出错:",e?.message)
        }finally {
            await db.close();
        }
    })

    ///根据条件更新该条数据
    ipcMain.handle("db_update",async (event, dbName:string,newData:any,config?:{
        selector?:Map<string,any>
        fields?:string[],
    })=>{
        const db = new PouchDB(getPath(dbName))
        try {
            const res =await db.find(config)

            if(res.docs.length>0){
                const result = res.docs[0]
                for (let key in newData){
                    result[key]=newData[key]
                }
                const updateRes = await db.put(result)
                console.log(`${dbName}修改的数据:`,updateRes.ok)
                return updateRes.ok
            }
        }catch (e){
            console.log("db_update出错:",e?.message)
        }finally {
            await db.close();
        }
    })
}