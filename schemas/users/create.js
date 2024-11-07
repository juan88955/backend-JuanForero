import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
       'string.base': 'El nombre debe ser alfanumérico',
       'string.alphanum': 'No uses caracteres especiales'
    }),
    email: joi.string().email().required(),
    password: joi.string().required(),
    photo: joi.string().required(),
    role: joi.number().required().min(2).max(5).messages({
        'number.min': 'Minimo son 2 digitos',
        'number.max': 'Maximo son 5 digitos'

    }),
    auto: joi.objectId()
})

export default schema