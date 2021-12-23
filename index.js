const express = require("express");
const {Schema} = require("mongoose");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the !!!");
});

    const User = Schema({
        firstName: {
            type: String,
            default: ""
        },
        lastName: {
            type:String,
            default: ""
        },
        dateOfBirth: {
            type:String,
            default: ""
        },
        school: {
            type:String,
            default: ""
        },
    }, {timeStampe: true});

    app.post("/adduser", async (req, res) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const dateOfBirth = req.body.dateOfBirth;
        const school = req.body.school;
        
        const user = await User.create({firstName, lastName, dateOfBirth, school });
         if(user){
            return res.status(201).json({
                message:"User has been created",
        })
        } else {
            return res.status(204).json({
                message:"failed to create User"
            });
        };
    });

    app.get("/getUsers", async (req, res) => {
        const users = await User.find();
        res.status(200).json({users});        
    });


app.listen(8080, () => console.log("Server connected!!!!"));