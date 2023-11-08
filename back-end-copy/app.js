const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const supporterRoutes = require('./routes/supporterRoutes')



//connect to db
const dbURI = "mongodb+srv://bereket:berektAmare@cluster0.hykcfnf.mongodb.net/?retryWrites=true&w=majority";

const app = express()
app.use(cors({
	origin: true,
	credentials: true,
	exposedHeaders: ["token"]
}))

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => console.log('Connected to database'))
	.catch((err) => console.log(err))

app.listen(4000)
app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser())

app.get('/isconnected', (req, res) => res.status(200).json({ msg: "server online" }))
// app.use(userRoutes)
app.use('/', supporterRoutes)

app.use((req, res) => res.status(400).json({ msg: "wrong endpoint" }))