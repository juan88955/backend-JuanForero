const error_400 = (error,req,res,next) => {
    console.log(error);
    if (error.nombre = "bad Request") {
        return res.status(400).json({
            success: false,
            response: error,
            messagge: "Error"
        })
    }
    next(error)
    
}
export default error_400