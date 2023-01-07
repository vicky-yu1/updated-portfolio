const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
    console.log(`got here`);
});

app.get("/_yuvicky_/media", (req, res) => {
    console.log(res.body);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
