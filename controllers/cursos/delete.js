import Curso from '../../models/Curso.js';

const deleteOne = async (req, res, next) => {
    try {
        let deleteCurso = await Curso.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteCurso
        })

    } catch (error) {
        next(error)
    }
}


export { deleteOne }