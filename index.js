import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import multer from "multer";



const app = express();

const port = 3300;


const myhost = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "music"

})


myhost.connect((err) => {
    if (err) throw err;
    console.log("Connected to the Server!")
    // myhost.query("CREATE DATABASE music", (err, result) => {
    //     if (err) throw err;
    //     console.log("Database created successfully!")
    // })

    
})





app.get("/", (req, res) => {
    res.send("Hehhe, welcome!! 😊😊")
})

app.listen(port, () => {
    console.log("App is listening at the port " + port)
})