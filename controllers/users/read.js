import User from '../../models/User.js';
import '../../models/Auto.js';

let allUsers = async (req, res, next) => {
    try {
        let all = await User.find().populate ('auto', 'marca modelo').exec() // Populate el campo auto con el modelo Auto
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        next(error)
    }
}


let UserByRole = async (req, res, next) => {
    try {
        let roleQuery = req.params.x
        let all = await User.find({ role: roleQuery })
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        next(error)
    }
}





export { allUsers, UserByRole }