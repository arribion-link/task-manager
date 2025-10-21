const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET);
if (!JWT_SECRET) {
    console.log('failed to fetch json web token secret!!');
    process.exit(1);
}
const UserModel = require("../models/userModel.js");

const register_user = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({
                success:false,
                msg: "all fields are required"
            })
        }
        const userExist = await UserModel.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                msg: "user already exist login in instand"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserData = {
            password:hashedPassword,
            email,
            username
        }
        const newUser = new UserModel(newUserData);
        await newUser.save();

        const token = await jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '10h' });
        res
            .cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000
            }
        );

        return res.status(200).json({
            msg: "user registered successfully"
        });

    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong while registering the user"
        })
    }
}

const login_user = async () => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                msg: "All fields are required"
            });
        }
        const userFound = await UserModel.findOne( email );
        if (!userFound) {
            return res.status(404).json({
                msg: "User not found"
            });
        }
        const passwordMatch = bcrypt.compare(password, userFound);
        if (!passwordMatch) {
            return res.status(404).json({
                msg: "please provide the correct credentials"
            });
        }

        const token = await jwt.sign({ id: newUser._id }, JWT_SECRET, {
            expiresIn: "10h",
        });
            res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
    
        return res.status(200).json({
            msg: "user logged-in  successfully",
        });
    
    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong while logging in the user!!!"
        });
    }
}

const logout_user = async () => {
    try {
        res.clearCookie("token", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            msg: "user logged out successfully"
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong while logging out the user"
        });
    }
}

module.exports = {
    register_user,
    login_user,
    logout_user
}