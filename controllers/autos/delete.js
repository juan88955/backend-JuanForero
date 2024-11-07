import Auto from '../../models/Auto.js';

const deleteOne = async (req, res, next) => {
    try {
        let deleteAuto = await Auto.deleteOne({
            name: req.body.name
        })
        return res.status(200).json({
            response: deleteAuto
        })

    } catch (error) {
        next(error)
    }
}


export { deleteOne }