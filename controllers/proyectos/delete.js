import Proyecto from '../../models/Proyecto.js';

const deleteOne = async (req, res, next) => {
    try {
        let deleteProyecto = await Proyecto.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteProyecto
        })

    } catch (error) {
        next(error)
    }
}

export { deleteOne }