import {defineModel} from "foca";
import { FriendInfo} from "@/types/user";


interface IHome {

    conversationList:FriendInfo[]
}
const initialState:IHome = {
    conversationList:[]
}
const homeStore = defineModel('home', {
    initialState,
    reducers: {
        updateState(state, newState: Partial<IHome>) {
            Object.assign(state, newState);
        },
        clear() {
            return this.initialState;
        },
    },
});
export default homeStore
