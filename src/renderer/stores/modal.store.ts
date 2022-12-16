import {defineModel} from "foca";
import {User} from "@/types/user";
interface IModal {
  settingVisible:boolean,
  settingKey:string
  closeWinTypeVisible:boolean
  addFriendsVisible:boolean
  friendsRequestVisible:boolean
  userDetailVisible:boolean
  detailUser:User|null
  forceLogoutVisible:boolean
}
const initialState:IModal = {
    settingVisible:false,
    settingKey:'theme',
    closeWinTypeVisible:false,
    addFriendsVisible:false,
    userDetailVisible:false,
    friendsRequestVisible:false,
    detailUser:null,
    forceLogoutVisible:false
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
