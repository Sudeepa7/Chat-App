export const signup = async (req,res) => {
    try{
        const {fullname,username,confirmpassword,gender}= req.body;
    }catch (error){

    };
}

export const login = (req,res) => {
    console.log("login");
}

export const logout = (req,res) => {
    console.log("logout");
}