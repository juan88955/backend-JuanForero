import joi from 'joi-oid'

const schema = joi.object({
    _id: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID de usuario inválido',
            'any.required': 'Se requiere el ID del usuario'
        }),

    auto: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del auto inválido',
            'any.required': 'Se requiere el ID del auto'
        })
})

export default schema