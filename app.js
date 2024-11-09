const express = require("express");
const app = express();
const http = require("http");
const path = require("path");

const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server)

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log("We have a new connection!");
})

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(3000, () => {
    console.log("Listening on port 3000");
});