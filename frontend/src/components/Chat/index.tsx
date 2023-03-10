import React, { useState } from 'react';
import WebSocket from "react-websocket";
import { Props } from "./index.types";

const Chat: React.FC<Props> = () => {
    const webSocketRef = React.createRef();
    const [messages, setMessages] = useState<string[]>([])
    const [newMessage, setNewMessage] = useState<string>("")


    return <div className="Chat">
        <WebSocket
            url={"ws://localhost:8080"}
            ref={webSocketRef}
            onMessage={(message: string) => {
                setMessages([...messages, message]);
            }}
        />
        <div className="messages">
            {messages.map((message) => (
                <div key={message} className="message">{message}</div>
            ))}
        </div>
        <div className="form">
            <form onSubmit={(event) => {
                event.preventDefault();
                (webSocketRef.current as any)?.sendMessage(newMessage);
                setNewMessage("");
            }}>
                <input
                    type="text" 
                    value={newMessage}
                    onChange={(event) => {
                        setNewMessage(event.target.value);
                    }}
                />
                <button type="submit">Wyślij</button>
            </form>
        </div>
    </div>;
};

export default Chat;
