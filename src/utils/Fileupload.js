import { v2 as cloudinary } from "cloudinary";
import fs from 'fs' // read, write, open, remove, update , unlink


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadFileOnCloudinary = async (localFilePath) => {

    try {
        if (!localFilePath) return "local file path not found"

        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })

        // file has been uploaded successfully 
        console.log("File uploaded on cloudinary ", res.url)
        return res
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove temperary files from server(publis/assets)
        return null

    }
}

export { uploadFileOnCloudinary }






