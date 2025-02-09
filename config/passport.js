// const passport = require('passport');

// const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt');
// const { Strategy: LocalStrategy } = require('passport-local');
// const User = require('../models/User');
// const { jwtSecret } =  require('./keys');


/**
 * 
 * 
 *                    DEFINE PASSPORT STRATEGIES HERE LIKE THE EXAMPLES GIVEN HERE:
 * 
 * 
 */

// jwt strategy, used to get the user from jwt
// passport.use(new JwtStrategy({
//     jwtFromRequest: ExtractJwt.fromHeader('authorization'),
//     secretOrKey: jwtSecret
// }, async (payload, done) => {
//     try {
//         console.log(payload)

//         // Find the user specified in token
//         const user = await User.findById(payload.sub).select('-auth.local.password');

//         // If user doesn't exists, handle it
//         if (!user) {
//             return done(null, false);
//         }

//         // Otherwise, return the user
//         done(null, user);
//     } catch(error) {
//         console.log(error);
//         done(error, false);
//     }
// }))

// LOCAL STRATEGY
// passport.use(new LocalStrategy({
//     usernameField: 'usernameOrEmail'
// }, async (usernameOrEmail, password, done) => {
//     try {
//         const foundUserbyUsername = await User.findOne({ 'auth.username': usernameOrEmail });
//         const foundUserbyEmail = await User.findOne({ 'auth.email': usernameOrEmail });

//         // If not, handle it
//         if (!foundUserbyEmail && !foundUserbyUsername) {
//             return done(null, false);
//         }

//         console.log(foundUserbyUsername)
//         console.log(foundUserbyEmail)

//         // user is either the one by email or the one by username
//         const user = foundUserbyEmail || foundUserbyUsername;

//         // Check if the password is correct
//         const isMatch = await user.isValidPassword(password);

//         console.log(isMatch)

//         // If not, handle it
//         if (!isMatch) {
//             return done(null, false);
//         }

//         // Otherwise, return the user
//         done(null, user);

//     } catch (error) {
//         done(error, false);
//     }
// }));