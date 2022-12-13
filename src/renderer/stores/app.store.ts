import {defineModel} from "foca";
import {setLocal} from "@/utils/store";
import {StorageKey} from "@/types/storageKey";
interface IApp {
  collapsed:boolean
  platform:NodeJS.Platform
  theme:"light"|"dark"
  primaryColor:string
  fontSize:number
    language:"zh-CN"|"en-US"
    closeType:"min"|"quit"
}
const initialState:IApp = {
  collapsed:false,
  platform:window.electron?.platform || 'win32',
  theme:"light",
  primaryColor:"#1677ff",
  fontSize:100,
    language:"zh-CN",
    closeType:"min"
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
        async onChange(pre,next){
            setLocal({
                [StorageKey.localSetting]:{
                    theme:next.theme,
                    primaryColor:next.primaryColor,
                    fontSize:next.fontSize,
                },
                [StorageKey.localGeneral]:{
                    language:next.language,
                    closeType:next.closeType
                }
            })
            if(window.electron && window.app_store){
                const {scaleApp}=window.electron
                if (pre.fontSize!==next.fontSize){
                    if(scaleApp){
                        scaleApp(next.fontSize/100)
                    }
                }
                const {setStore}=window.app_store
                if(pre.language!==next.language){
                    await setStore("language",next.language)
                }
                if(pre.closeType!==next.closeType){
                    await setStore("closeType",next.closeType)
                }
            }

        }
    }
});
export default layoutStore
