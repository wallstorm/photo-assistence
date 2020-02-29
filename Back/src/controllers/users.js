const JWT = require("jsonwebtoken");
const pool = require("../database");
const { JWT_SECRET } = require("../configuration/index");
const helpers = require("../helpers/helperBcrypt");

signToken = (user, lastID) => {
    return JWT.sign({
        iss: "photoAssistence",
        sub: lastID[0].id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
        // Email and Password
        const { email, password } = req.value.body;

        const newUser = {
            email,
            password
        }

        // Check if ther is a user with the same email
        const foundUser = await pool.query("SELECT email FROM users WHERE email=?", email);
        console.log(foundUser);
        if (foundUser.length > 0) {
            return res.status(403).json({error: "Email is already in use"});
        }

        // Hashed Password
        newUser.password = await helpers.encryptPassword(password);
        console.log("hash pass:", newUser);

        // Create a new user
        await pool.query("INSERT INTO users set ?", [newUser]);
        
        const lastID = await pool.query("SELECT id FROM users ORDER BY id DESC LIMIT 1;");

        // Generate the token
        const token = signToken(newUser, lastID);

        // Respond with token
        res.status(200).json({ token });
        
    },

    signIn: async (req, res, next) => {
        // generate token
        const lastID = await pool.query("SELECT id FROM users ORDER BY id DESC LIMIT 1;");
        const token = signToken(req.user, lastID);
        res.status(200).json({ token });
    },

    googleOAuth: async (req, res, next) => {
        // Generate token
        console.log("req.user:", req.user);
        const lastID = await pool.query("SELECT id FROM users ORDER BY id DESC LIMIT 1;");
        const token = signToken(req.user, lastID);
        res.status(200).json({ token });
    },

    facebookOAuth: async (req, res, next) => {
        console.log("req.user", req.user);
        const lastID = await pool.query("SELECT id FROM users ORDER BY id DESC LIMIT 1;");
        const token = signToken(req.user, lastID);
        res.status(200).json({ token });
    },

    secret: async (req, res, next) => {
        console.log("I managed to get here!");
        res.json({secret: "resource"});
    }
}