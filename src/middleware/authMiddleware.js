import { checkIfUserExists } from "../services/userService.js";
import { verifyJWT } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
    //check if jwt is passed in the header
    const token = req.headers["x-access-token"];//this is the key name of the header where we are passing the jwt token.

    if(!token){
        return res.status(400).json({
            success: false,
            message: "Token is required for authentication"
        });
    };

    //verify the token

    try{
        const response = verifyJWT(token);

        const doesUserExist = await checkIfUserExists(response.email);

        if(!doesUserExist){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = response;

        next();
    }catch(error){
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }


};