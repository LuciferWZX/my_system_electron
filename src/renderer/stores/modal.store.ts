import {defineModel} from "foca";
import {User} from "@/types/user";
interface IModal {
  settingVisible:boolean,
  settingKey:string
  closeWinTypeVisible:boolean
  addFriendsVisible:boolean
  userDetailVisible:boolean
  detailUser:User|null
}
const initialState:IModal = {
    settingVisible:false,
    settingKey:'theme',
    closeWinTypeVisible:false,
    addFriendsVisible:false,
    userDetailVisible:false,
    detailUser:null
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
