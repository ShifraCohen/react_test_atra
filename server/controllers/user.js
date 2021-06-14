const User = require('../models/user');




const dotenv = require('dotenv');
dotenv.config();



const registerUser = async (req, res) => {
    let newUser = new User(req.body)
console.log("hi!");
    console.log(newUser);
    try {
        await newUser.save();
        // let token = jwt.sign({ name: newUser.name }, process.env.TOKEN_SECRET);

        res.status(200).json({ newUser: newUser });
    }
    catch (error) {
        res.status(500).json({ 'cannot save new user: ': error.message })
    }
}
const getAllUsers = async (req, res) => {
    try {
        console.log('hi');
        let users = await User.find()
        
        console.log(users);
        res.status(200).json({ users: users })
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
}



module.exports = { registerUser,getAllUsers}

