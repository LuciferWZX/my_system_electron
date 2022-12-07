import {defineModel} from "foca";
interface IApp {
  collapsed:boolean
  platform:NodeJS.Platform
    theme:"light"|"dark"
}
const initialState:IApp = {
  collapsed:false,
  platform:window.electron?.platform || 'win32',
    theme:"light"
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
    },
});
export default layoutStore
