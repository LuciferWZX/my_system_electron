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
        clear() {
            return this.initialState;
        },
    },
    methods:{

    }
});
export default socketStore
