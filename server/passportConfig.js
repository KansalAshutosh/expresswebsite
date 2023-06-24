//File Name: passportConfig.js
//Student's Name: Ashutosh Kansal
//StudentID: 301233980
//Date: 22 June, 2023

const LocalStrategy = require("passport-local").Strategy;
const User = require("./model/model02");

// Function to initialize Passport
exports.initializingPassport = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      // Using LocalStrategy for authentication
      try {
        const user = await User.findOne({ username });
        if (!user) return done(null, false);

        if (user.password !== password) return done(null, false);

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize user ID to store in session
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id); // Find user by ID
      done(null, user); // Deserialize user from session
    } catch (error) {
      done(error, false); // Error occurred, deserialization fails
    }
  });
};

// Middleware to check if user is authenticated
exports.isAuthenticated = (req, res, next) => {
  if (req.user) return next(); // User is authenticated, proceed to the next middleware
  res.redirect("/login"); // User is not authenticated, redirect to login page
};
