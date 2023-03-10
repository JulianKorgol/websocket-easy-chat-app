import React, { useState } from 'react';
import WebSocket from "react-websocket";
import { Props } from "./index.types";

const Chat: React.FC<Props> = () => {
    const [messages, setMessages] = useState<string[]>([])


    return <div className="Chat">
        <WebSocket url={"ws://localhost:8080"} onMessage={(message: string) => {
            setMessages([...messages, message]);
        }}
        />
    </div>;
};

export default Chat;
