const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
//middlewares
app.use(cors())
app.use(bodyParser.json())
const postsRoute = require('./Routes/posts')
app.use('/api', postsRoute)
app.get('/', (req, res) => {
	res.send('Hello')
})
//CORS enable

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})

//database connection
const connectDatabase = () => {
	mongoose
		.connect(process.env.DB_CONNECT, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})
		.then(() => {
			console.log('connection with database established successfully')
		})
		.catch((err) => {
			console.log(err)
		})
}
connectDatabase()

app.listen(8080, () => {
	console.log('app running on port 8080')
})
