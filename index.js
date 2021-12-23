const express = require("express");
const {Schema} = require("mongoose");
const app = express();


app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to the !!!");
});

app.get("/info", (req, res) => {
    res.send([
        {
            name: "Bless",
            gender: "Female",
        },
        {
            name: "Elisha",
            gender: "Male",
        },
        {
            name: "Ekow",
            gender: "Male",
            Title: "Champion",
        }
    ]);
});

    const Info = Schema({
        name: {
            type: String,
            default: ""
        },
        gender: {
            type:String,
            default: ""
        },
    }, {timeStampe: true});

    app.post("/create", async (req, res) => {
        const name = req.body.name;
        const gender = req.body.gender;
        
        const info = await Info.create({name, gender});
        res.status(400).json({info});
    });


app.listen(8080, () => console.log("Server connected!!!!"));