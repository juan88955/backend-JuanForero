import User from '../../models/User.js';

const update = async (req, res, next) => {
    try {
        let user = req.body; // obtener el objeto del body

        let upd = await User.updateOne(
            { _id: user._id }, // buscar el usuario por su id
            { auto: user.auto } // actualizar el campo auto
        );

        return res.status(200).json({
            response: upd
        }); // enviar respuesta
    } catch (error) {
        next(error);
    }
};

export { update }; // exportar la función