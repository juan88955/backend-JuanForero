import Auto from '../../models/Auto.js';

let create = async (req, res, next) => {
    try {
        let auto = req.body
        let all = await Auto.create(auto)
        return res.status(201).json({
            response: all,
        })
    } catch (error) {
        next(error)
    }

}


export { create }