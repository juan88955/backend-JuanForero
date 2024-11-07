import joi from 'joi-oid'

const schema = joi.object({
    firstName: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    lastName: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    email: joi.string().email().required(),
    phone: joi.string().required(),
    address: joi.string().required(),
    password: joi.string().required(),
    photo: joi.string().required(),
    role: joi.number().required().min(1).max(5).messages({
        'number.min': 'Minimo son 1 digito',
        'number.max': 'Maximo son 5 digitos'
    }),
    proyecto: joi.objectId()
})

export default schema