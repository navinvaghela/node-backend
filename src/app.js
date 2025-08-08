import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'


const app = express()


// midddleware and configuration we used app.use()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// here we can manage limit of request of data, we have request-data limit maximum 16kb
app.use(express.json({
    limit: '16kb',
}))

// url encoded like when we search any data on google then in url we get something like navin%vaghela or navin+vaghela. that url also able to access and get data.
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))

// this used to get server static data like in public folder we can store images, logo, favicon, svg and get from server publit folder.
app.use(express.static("public"))

app.use(cookieParser())
export { app }