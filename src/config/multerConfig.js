import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "./awsConfig.js";
import { AWS_BUCKET_NAME } from "./serverConfig.js";

export const s3uploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        key: function (req, file, cb) { //this key function is going to regulate how the file should be uploaded to s3.

            if(!file){
                return cb(new Error("File not found"));
            }
            console.log(file, req.body);
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);//to make the key is unique

            cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]);//this callback is provided by multers3. When we call this callback the image upload happens. The first argument is error and the second argument is the key. The key is the name of the file that is going to be uploaded to s3.
        }
    })
});//uploader is a middleware

