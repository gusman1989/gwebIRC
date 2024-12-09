import io, {Socket as rawSocket} from "socket.io-client";
import type {ServerToClientEvents, ClientToServerEvents} from "../../shared/types/socket-events";

type Socket = rawSocket<ServerToClientEvents, ClientToServerEvents>;

const socket: Socket = io('https://9000-idx-gwebirc-1733701845032.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev', {
    withCredentials: true,
	transports: JSON.parse(document.body.dataset.transports || "['polling', 'websocket']"),
	path: window.location.pathname + "socket.io/",
	autoConnect: false,
	reconnection: !document.body.classList.contains("public"),
});

// Ease debugging socket during development
if (process.env.NODE_ENV === "development") {
	window.socket = socket;
}

declare global {
	interface Window {
		socket: Socket;
	}
}

export default socket;
