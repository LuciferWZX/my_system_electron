import {app} from 'electron'

export default async (database:string)=>{
    let databasePath = `log/${database}`
    if(app.isPackaged){
        const LOG_PATH = app.getPath("logs");
        databasePath = `${LOG_PATH}/${database}`
    }
    const PouchDB = require("pouchdb")
    const db = new PouchDB(databasePath)

    const doc = {
        _id : "123",
        name: "dev",
        age : 23,
        designation : "Designer"
    }
    try {
        const res =await db.put(doc)
        console.log("res:",res.rows)
    }catch (e){
        console.log("exception:",e?.message)
    }
    try {
        const info =await db.info()
        console.log("info:",info)
    }catch (e){
        console.log("exception:",e)
    }
    await db.close();

}