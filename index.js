const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Getting .env data
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;
const DB_URI = process.env.DB_URI;


app.use(express.json())
app.use(cors())



// Database Connection

mongoose.set('strictQuery', true);

mongoose.connect(DB_URI)
    .then(() => {
        console.log('Database Connected Successfully');
    })
    .catch((err) => {
        console.log('Database Connection Failed', err);
    })

//checking API

app.get("/", (req, res) => {
    res.send('Welcome to ZENCLASS - Dashboard')
})

// Importing Routes
const studentRouter = require("./Routes/studentRoutes")
const loginRouter = require("./Routes/loginRoutes")
const capstoneRouter = require("./Routes/capstoneRoutes")
const leaveRouter = require("./Routes/leaveRoutes")
const portfolioRouter = require("./Routes/portfolioRoutes")
const queryRouter = require("./Routes/queryRoutes")
const taskRouter = require("./Routes/taskRoutes")
const webcodeRouter = require("./Routes/webcodeRoutes")


app.use(studentRouter)
app.use(loginRouter)
app.use(capstoneRouter)
app.use(leaveRouter)
app.use(portfolioRouter)
app.use(queryRouter)
app.use(taskRouter)
app.use(webcodeRouter)

// Listening Port
app.listen(PORT,HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
})

module.exports = app;
