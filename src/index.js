import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({ path: '/.env' })

const PORT =  process.env.PORT || 3003

connectDB()
    .then(() => {
        app.on("error" , (error) => {
            console.log("App failed\, ERR: ", error)
            throw error
        })

        app.listen(PORT, ()=> {
            console.log(`App running on http://localhost:${PORT}`);
            
        })
    })
    .catch((error) => {
        console.log("MONGODB CONNETION FAILED, ", error)
    })