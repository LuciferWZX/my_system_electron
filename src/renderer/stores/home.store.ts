import {defineModel} from "foca";
import {Conversation, FriendInfo} from "@/types/user";


interface IHome {
    conversationList:Conversation[],
    currentId:string
}
const initialState:IHome = {
    conversationList:[],
    currentId:""
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
    methods:{
        async getConversations(){}
    }
});
export default homeStore
