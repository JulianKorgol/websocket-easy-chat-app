const ws = require("ws");


const port = 8080;
const wss = new ws.Server({ port });

wss.on("listening", () => {
    console.log(`Server run on port ${port}`);
});

wss.on("connection", (client) => {
    console.log("New connection");

    client.on("message", (data) => {
        const message = data.toString();
        console.log(message)
        console.log(message.toString());
        if (message === "ping") {
            client.send("pong");
        } else if (message === "hmm") {
            let i = 0;
            const interval = setInterval(() => {
                client.send(`hmm ${i}`);
                i++;
            }, 1000);
        }
    });

    // ws.on("message", (data) => {
    //     console.log(data.toString());
    // });

    // ws.on("message", (data) => {
    //     wss.clients.forEach((client) => client.send(data.toString()));
    // });
});