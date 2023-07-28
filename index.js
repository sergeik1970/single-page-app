const express = require("express");

const port = 3000;

const app = express();

app.use("/static", express.static(__dirname + "/static"));

app.use("/images", express.static(__dirname + "/static/images"));

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () =>
    console.log(`Сервер работает на порту: http://localhost:${port}`)
);