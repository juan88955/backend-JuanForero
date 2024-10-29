import Empleado from '../../models/Empleado.js';

let create = async (req, res, next) => {
    try {
        let empleado = req.body
        let all = await Empleado.create(empleado)
        return res.status(201).json({
            response: all,
        })
    } catch (error) {
        next(error)
    }

} 

export { create }