const express = require("express"); // Import Express
const bodyParser = require("body-parser"); // Middleware for POST requests
const fs = require("fs"); // File system module

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Body parser middleware

// Basic GET Route
app.get("/", function (req, res) {
    res.send("Hello it is my first express application");
});

// New Route 1: '/about'
app.get("/about", function (req, res) {
    res.send("This is a basic express application");
});

// New Route 2: '/users/:userId/books/:bookId'
app.get("/users/:userId/books/:bookId", function (req, res) {
    res.send(req.params); // Sends the parameters back in response
});

// Exercise 3: Read the whole Student JSON file
app.get("/GetStudents", function (req, res) {
    fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send("Error reading file");
        } else {
            res.json({
                status: true,
                Status_Code: 200,
                "Requested URL": req.url,
                "Request Method": req.method,
                studentdata: JSON.parse(data),
            });
        }
    });
});

// Exercise 3: Search Student by ID
app.get("/GetStudentid/:id", (req, res) => {
    fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send("Error reading file");
        } else {
            const students = JSON.parse(data); // Parse the JSON file
            const student = students["Student" + req.params.id]; // Find the student by ID

            if (student) {
                res.json(student); // Return the specific student
            } else {
                res.json({
                    status: false,
                    message: "Student not found",
                    Requested_ID: req.params.id,
                });
            }
        }
    });
});

// Start the server
app.listen(5000, function () {
    console.log("Server is running on port 5000");
});


// Route to serve the StudentInfo.html file
app.get("/studentinfo", function (req, res) {
    res.sendFile("StudentInfo.html", { root: __dirname });
});

// Route to handle form submission (POST method)
app.post("/submit-data", function (req, res) {
    const name = req.body.firstName + " " + req.body.lastName;
    const age = req.body.myAge;
    const gender = req.body.gender;
    const qualifications = req.body.Qual;

    console.log(req.body); // Log the form data to the console

    res.send({
        status: true,
        message: "Form Details Submitted Successfully",
        data: {
            name: name,
            age: age,
            gender: gender,
            qualifications: qualifications,
        },
    });
});
