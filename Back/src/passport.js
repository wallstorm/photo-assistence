const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");
const GooglePlusTokenStrategy = require("passport-google-plus-token");
const FacebookTokenStrategy = require("passport-facebook-token");
const { JWT_SECRET } = require("./configuration/index");
const pool = require("./database");
const helpers = require("./helpers/helperBcrypt");
const config = require("./configuration/index");
const GooglePlusStrategy = require('passport-google-plus');

// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        // Find the user specified in token
        const user = await pool.query("SELECT id FROM users WHERE id=?", payload.sub);

        // If user doesn"t exist, handle it
        if (!user) {
            return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);

    } catch(err) {
        done(err, false);
    }
}));

// GOOGLE OAUTH STRATEGY
passport.use("googleToken", new GooglePlusTokenStrategy({
    clientID: config.oauth.google.clientID,
    clientSecret: config.oauth.google.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);
        console.log("profile_id:", profile.id);
        console.log("profile_email:", profile.emails[0].value);

        // Check whether this current user exists in our DB
        const existingUser = await pool.query("SELECT id FROM users_google WHERE id=?", profile.id);
        console.log("existingUser:", existingUser);
        if (existingUser.length > 0) {
            return done(null, existingUser);
        }

        // If new account
        const newUserGoogle = {
            id: profile.id,
            email: profile.emails[0].value,
            method: "google"
        }
        console.log("newUserGoogle:", newUserGoogle);
        await pool.query("INSERT INTO users_google set ?", [newUserGoogle]);
        
        done(null, newUserGoogle);

    }   catch(err) {
            console.log("CATCH ERR");
            done(null, false, err.message);
    }
}));



passport.use("google", new GooglePlusStrategy({
    clientId: config.oauth.google.clientID,
    clientSecret: config.oauth.google.clientSecret
  },
  function(tokens, profile, done) {
    // Create or update user, call done() when complete...
    console.log("tokens:", tokens);
    console.log("profile:", profile);
    done(null, profile, tokens);
  }
));

passport.use("facebookToken", new FacebookTokenStrategy({
    clientID: config.oauth.facebook.clientID,
    clientSecret: config.oauth.facebook.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log("profile", profile)
        console.log("accessToken", accessToken)
        console.log("refreshToken", refreshToken)

        // Check whether this current user exists in our DB
        const existingUser = await pool.query("SELECT id FROM users_google WHERE id=?", profile.id);
        console.log("existingUser:", existingUser);
        if (existingUser.length > 0) {
            return done(null, existingUser);
        }

        // If new account
        const newUserFacebook = {
            id: profile.id,
            email: profile.emails[0].value,
            method: "facebook"
        }
        console.log("newUserFacebook:", newUserFacebook);
        await pool.query("INSERT INTO users_google set ?", [newUserFacebook]);
        
        done(null, newUserFacebook);

    } catch(err) {
        done(err, false, err.message);
    }
}));

// LOCAL STRATEGY
passport.use("local-signin", new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done) => {
    try {
        // Find the user given the email

        const newUser = {
            email,
            password
        }

        const user = await pool.query("SELECT email, password FROM users WHERE email=?", email);
        console.log("USER", user);
        // If no, handle it
        if (!user) {
            return done(null, false);
        }
        console.log("pass normal:", password);
        console.log("pass db:", user[0].password);
        // Check if the password is correct
        const isMatch = await helpers.matchPassword(password, user[0].password);
        console.log("ISMATCH", isMatch);

        // If not, handle it
        if (!isMatch) {
            return done(null, false);
        }

        // Otherwise, return the user
        return done(null, newUser);
    } catch(err) {
        done(err, false);
    }
}));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});