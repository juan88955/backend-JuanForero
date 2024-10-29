import Proyecto from '../../models/Proyecto.js';

const update = async (req, res, next) => {
    try {
        let proyecto = req.body; // obtener el objeto del body

        let upd = await Proyecto.updateOne(
            { _id: proyecto._id }, // buscar el usuario por su id
            { empleado: proyecto.empleado } // actualizar el campo auto
        );

        return res.status(200).json({
            response: upd
        }); // enviar respuesta
    } catch (error) {
        next(error);
    }
};

export { update }; // exportar la función