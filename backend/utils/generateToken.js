import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d",
    });

    res.cookie("jwtCookie",token,{
        maxAge : 15*24*60*60*1000, //in millisecond
        httpOnly : true, // prevent xss attacks cross-site scripting attcks
        sameSite: "strict", //CSRF attacks cross-site request forgery attcks
        secure : process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;