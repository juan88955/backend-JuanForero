import Auto from '../../models/Auto.js';

let allAutos = async (req, res) => {
    try {
        let all = await Auto.find().populate('user', 'name').exec() // Populate el campo client con el modelo Cliente
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

let AutoByModelo = async (req, res) => {
    try {
        let modeloQuery = req.params.x
        let all = await Auto.find({modelo : modeloQuery})
        return res.status(200).json({
            respnse: all,
        })
    } catch (error) {
        return res.status(500).json({
            response: error,
        })
    }
}

 
  export { allAutos, AutoByModelo }