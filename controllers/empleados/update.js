import Empleado from '../../models/Empleado.js';

const update = async (req, res, next) => {
    try {
        let empleado = req.body; // obtener el objeto del body

        let upd = await Empleado.updateOne(
            { _id: empleado._id }, // buscar el usuario por su id
            { proyecto: empleado.proyecto } // actualizar el campo empleado
        );

        return res.status(200).json({
            response: upd
        }); // enviar respuesta
    } catch (error) {
        next(error);
    }
};

export { update }; // exportar la función