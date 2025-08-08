import mongoose from "mongoose";
import { DB_NAME } from "../constacts.js";

const URL =  process.env.MONGODB_URI
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${URL}/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (e) {
        console.error("===== MongoDB Connection ===>>>> Error: ", e)
        process.exit(1)
    }
}

export default connectDB