import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK,
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);

            // Verificar si el usuario ya existe en la base de datos
            let user = await User.findOne({ email: profile.emails[0].value })

            try {
                if (user) {
                    return done(null, user)
                } else {
                    let user = new User({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        password: profile.id,
                        photo: profile.photos[0].value,
                        role: 1,
                        online: true
                    })
                    await user.save()
                }
                return done(null, user)
            } catch (error) {
                return done(error, null)
            }

        }
    )
)
