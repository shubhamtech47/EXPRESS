const express = require("express");
const app = express();

//console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

app.use((req, res) => {
    //console.log(req);
    console.log("request received");
    //res.send("this is a basic response");
    res.send({
        name: "apple",
        color: "red",
    });
});

app.get("/:username", (req, res) => {
    console.log(req.params);
    res.send("hello, i am root");
});