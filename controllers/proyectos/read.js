import Proyecto from '../../models/Proyecto.js';

let allProyectos = async (req, res) => {
    try {
        let all = await Proyecto.find()
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let proyectosPorClientId = async (req, res) => {
    try {
        let clientId = req.params.x;
        let proyectos = await Proyecto.find({ clientId: clientId });
        return res.status(200).json({
            response: proyectos,
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message,
        });
    }
}

export { allProyectos, proyectosPorClientId }