
import { io } from "socket.io-client";

export  function  useSocket(){

    const  trigger =  (token : string)=>{


        console.log('trigger', "100");

        if (window.isReadySocket) {
            console.log("socket is running");
            return;
        }

        window.isReadySocket = true;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        //  useRequest("http://localhost:8082/auth");
        const client = new io("http://localhost:10000/im/user?token="+token);
        client.on("connect", () => {
            // console.log("Connected:", client.id)
        });

        client.on("chat", (data : never) => {
            console.log("Received message:", data);
        });

        setTimeout(()=>{
            // client.emit("message");
            client.emit("chat", {"message" : "hello world"});
        }, 1000);


        window.socket = client;

    }



    return {trigger}
}