const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcrypt");
const { User } = require("./models/User");
const { jwtSecret } = require("./conf");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (mail, password, done) => {
      criteria = {
        email: mail
      };
      User.findOne({ email: mail }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: "User not found!" });
        bcrypt.compare(password, user.password, (errBcrypt, result) => {
          if (errBcrypt) return done(errBcrypt);
          if (!result)
            return done(null, false, { message: "Incorrect password!" });
          return done(null, user);
        });
        return done(null, false, { message: "You shouldn't be there!" });
      });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      // find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return done(null, user);
    }
  )
);
