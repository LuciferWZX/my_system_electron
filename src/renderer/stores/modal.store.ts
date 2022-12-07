import {defineModel} from "foca";
interface IModal {
  settingVisible:boolean,
  settingKey:string
}
const initialState:IModal = {
    settingVisible:false,
    settingKey:'theme'
}
const modalStore = defineModel('modal', {
    initialState,
    reducers: {
        updateState(state, newState: Partial<IModal>) {
            Object.assign(state, newState);
        },
        clear() {
            return this.initialState;
        },
    },
});
export default modalStore
