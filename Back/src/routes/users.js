const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
const passportConf = require("../passport");

const { validateBody, schemas } = require("../helpers/routerHelpers");
const UsersController = require("../controllers/users");
const passportSignin = passport.authenticate("local-signin", {session: false});
const passportJWT = passport.authenticate("jwt", { session: false });
const passportGoogle = passport.authenticate("googleToken", { session: false });
const passportFacebook = passport.authenticate("facebookToken", { session: false });

router.route("/signup")
    .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route("/signin")
    .post(validateBody(schemas.authSchema), passportSignin, UsersController.signIn);

router.route("/oauth/googleee")
    .post(passportGoogle, UsersController.googleOAuth);

router.route('/oauth/google/callback')
    .post(passport.authenticate('google', (req, res) => {
        // Return user back to client
        console.log("ANDAAAAA");
        console.log("req:", req);
    }));

router.route("/oauth/facebook")
    .post(passportFacebook, UsersController.facebookOAuth);

router.route("/secret")
    .get(passportJWT, UsersController.secret);

module.exports = router;