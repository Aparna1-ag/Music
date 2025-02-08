import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import multer from "multer";



const app = express();

const port = 3300;

app.use(bodyParser.urlencoded({extended : true}))


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


    // myhost.query("CREATE TABLE favmusic(id INT PRIMARY KEY, participantName VARCHAR(255) NOT NULL, musicName VARCHAR(255) NOT NULL, albumName VARCHAR(255), surveyDate DATE); ", (err, result) => {
    //     if (err) throw err;
    //     console.log("Table created successfully!")
    // })


// let myQuery = "INSERT INTO favmusic(id, participantName, musicName, albumName, surveyDate) VALUES (1, 'Max Rogers', 'Roi', 'Videoclub', '2025-01-26'), (2, 'Nick Hills', 'Skyfall', 'Adele', '2025-01-27');"


// let myQuery = "INSERT INTO favmusic(id, participantName, musicName, albumName, surveyDate) VALUES (3, 'Nathan', 'Yellow', 'Coldplay', '2025-01-28');"


// let myQuery = "UPDATE favmusic SET age = 27 WHERE id = 1;"
// let myQuery = "UPDATE favmusic SET age = 25 WHERE id = 2;"
// let myQuery = "UPDATE favmusic SET age = 24 WHERE id = 3;"


// let myQuery = "ALTER TABLE favmusic MODIFY COLUMN age INT NOT NULL;"

// let myQuery = "INSERT INTO favmusic(participantName, musicName, albumName, surveyDate, age) VALUES ('Roxy', 'Believer', 'Imagine Dragons', '2025-01-29', 28);"


// let myQuery = "INSERT INTO favmusic(participantName, musicName, albumName, surveyDate, age) VALUES (? , ? , ?,  ?,  ?);"




//     myhost.query(myQuery, [fullname, age, music, singer, surveydate], (err, res) => {
//         if (err) throw err;
//         console.log(res)
//     })

    
})



app.post("/", (req, res) => {
   

    const {fullname, music, age, singer, surveydate} =  req.body;

    let insertQuery = "INSERT INTO favmusic(participantName, musicName, albumName, surveyDate, age) VALUES (? , ? , ?,  ?,  ?);"

    myhost.query(insertQuery, [fullname, music, singer, surveydate, age], (err, result)  => {
        if (err) throw err;
        console.log(result)
        res.send("Thank you for participating😊😊, your response has been recorded.")
       
    })




})




app.listen(port, () => {
    console.log("App is listening at the port " + port)
})





