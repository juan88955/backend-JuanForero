import joi from 'joi-oid'

const schema = joi.object({
    _id: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID de auto inválido',
            'any.required': 'Se requiere el ID del auto'
        }),

    user: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del usuario inválido',
            'any.required': 'Se requiere el ID del usuario',
        })
})  

export default schema