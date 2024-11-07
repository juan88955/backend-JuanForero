import Empleado from '../../models/Empleado.js';

const deleteOne = async (req, res, next) => {
    try {
        let deleteEmpleado = await Empleado.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteEmpleado
        })

    } catch (error) {
        next(error)
    }
}


export { deleteOne }