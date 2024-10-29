import Curso from '../../models/Curso.js';

const update = async (req, res, next) => {
    try {
        let curso = req.body; // obtener el objeto del body

        let upd = await Curso.updateOne(
            { _id: curso._id }, // buscar el usuario por su id
            { user: curso.user } // actualizar el campo auto
        );

        return res.status(200).json({
            response: upd
        }); // enviar respuesta
    } catch (error) {
        next(error);
    }
};

export { update }; // exportar la función