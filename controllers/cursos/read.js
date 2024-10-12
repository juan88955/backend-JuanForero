import Curso from '../../models/Curso.js';

let allCursos = async (req, res) => {
    try {
        let all = await Curso.find()
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error.message,
        })
    }
}

let courseById = async (req, res) => {
    try {
        let courseId = req.params.x
        let curso = await Curso.findOne({ courseId: courseId })
        if (!curso) {
            return res.status(404).json({
                response: "Curso no encontrado",
            })
        }
        return res.status(200).json({
            response: curso,
        })
    } catch (error) {
        return res.status(500).json({
            response: error.message,
        })
    }

}

export { allCursos, courseById }