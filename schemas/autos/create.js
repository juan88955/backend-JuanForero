import joi from 'joi-oid'

const schema = joi.object({
    marca: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    modelo: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    user: joi.objectId()
})

export default schema