import Auto from '../../models/Auto.js';

const update = async (req, res, next) => {
    try {
        let auto = req.body; // obtener el objeto del body

        let upd = await Auto.updateOne(
            { _id: auto._id }, // buscar el usuario por su id
            { user: auto.user } // actualizar el campo auto
        );

        return res.status(200).json({
            response: upd
        }); // enviar respuesta
    } catch (error) {
        next(error);
    }
};

export { update }; // exportar la función