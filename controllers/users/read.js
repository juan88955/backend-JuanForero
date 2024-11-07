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

let userById = async (req, res, next) => {
    try {
        let userId = req.params.x
        let user = await User.findOne({ _id: userId })
        if (!user) {
            return res.status(404).json({
                response: "Usuario no encontrado",
            })
        }
        return res.status(200).json({
            response: user,
        })
    } catch (error) {
        next(error)
    }
}




export { allUsers, UserByRole, userById }