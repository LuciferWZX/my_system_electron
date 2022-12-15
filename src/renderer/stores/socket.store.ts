import {defineModel} from "foca";
import {Socket} from "socket.io-client";

interface ISocket {
    socket:Socket|null
}
const initialState:ISocket = {
    socket:null
}
const socketStore = defineModel('socket', {
    initialState,
    reducers: {
        updateState(state, newState: Partial<ISocket>) {
            Object.assign(state, newState);
        },
        clear(state) {
            const socket = state.socket
            if(socket){
                if (socket.connected){
                    socket.disconnect()
                    socket.close()
                }
            }
            return this.initialState;
        },
    },
    methods:{

    },
    events:{
        onDestroy(){

        }
    },
    skipRefresh:true
});
export default socketStore
