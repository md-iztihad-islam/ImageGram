import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        validate: {
            validator: function(emailValue){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: "Invalid email format!!!"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    }
}, { timestamps: true });

userSchema.pre("save", function modifyPassword (next){//this function must be not arrow function
    //incoming user object
    //this keyword points to the incoming user object

    const user = this; //object with plain password

    const SALT = bcrypt.genSaltSync(9);//creating a salt object

    //hash password

    const hashedPassword = bcrypt.hashSync(user.password, SALT);

    //replace plain password with hashed password

    user.password = hashedPassword;

    next();//to continue with the save operation

});

const user = mongoose.model("User", userSchema); //user collection

export default user;