import User from '../../models/User.js';

let allUsers = async (req, res) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}


 let UserByRole = async (req, res) => {
    try {
        let roleQuery = req.params.x
        let all = await User.find({role : roleQuery})
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}





export { allUsers, UserByRole }