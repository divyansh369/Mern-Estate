import User from "../models/user.model.js";
import bcryptjs  from "bcryptjs";

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password,10);
  const newUser = new User({ username, email, password:hashedPass });
    try {
        await newUser.save();
        res.status(201).json("User created succesfully");
        
    } catch (error) {
        res.status(500).json({error:error.message,message:"same username or email is created"});        
    }
};

export default signup;
