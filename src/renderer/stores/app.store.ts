import {defineModel} from "foca";
import {setLocal} from "@/utils/store";
import {StorageKey} from "@/types/storageKey";
interface IApp {
  collapsed:boolean
  platform:NodeJS.Platform
  theme:"light"|"dark"
  primaryColor:string
  fontSize:number
}
const initialState:IApp = {
  collapsed:false,
  platform:window.electron?.platform || 'win32',
  theme:"light",
  primaryColor:"#1677ff",
  fontSize:100
}
const layoutStore = defineModel('layout', {
    initialState,
    reducers: {
        updateState(state, newState: Partial<IApp>) {
            Object.assign(state, newState);
        },
        clear() {
            return this.initialState;
        },
        initTheme(state){
            state.theme = this.initialState.theme
            state.primaryColor = this.initialState.primaryColor
            state.fontSize = this.initialState.fontSize
        }
    },

    skipRefresh:true,
    events:{
        onChange(pre,next){
            console.log("pre:",pre)
            console.log("next:",pre)
            setLocal({
                [StorageKey.localSetting]:{
                    theme:next.theme,
                    primaryColor:next.primaryColor,
                    fontSize:next.fontSize,
                }
            })
            if(window.electron){
                const {scaleApp}=window.electron
                if (pre.fontSize!==next.fontSize){
                    if(scaleApp){
                        scaleApp(next.fontSize/100)
                    }
                }
            }

        }
    }
});
export default layoutStore
