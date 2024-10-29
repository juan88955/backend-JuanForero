import Curso from '../../models/Curso.js';

let create = async (req, res, next) => {
    try {
        let curso = req.body
        let all = await Curso.create(curso)
        return res.status(201).json({
            response: all,
        })
    } catch (error) {
        next(error)
    }

}


export { create }