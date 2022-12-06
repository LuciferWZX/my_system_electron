import {defineModel} from "foca";
interface IApp {
  collapsed:boolean
  platform:NodeJS.Platform
}
const initialState:IApp = {
  collapsed:false,
  platform:window.electron?.platform || 'win32'
}
const layoutModel = defineModel('layout', {
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
export default layoutModel
