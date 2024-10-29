import Empleado from '../../models/Empleado.js';

let allEmpleados = async (req, res) => {
    try {
        let all = await Empleado.find().populate('proyecto', 'name').exec() 
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let EmpleadoByRole = async (req, res) => {
    try {
        let roleQuery = req.params.x
        let all = await Empleado.find({role : roleQuery})
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}   

export { allEmpleados, EmpleadoByRole }