import joi from 'joi-oid'

const schema = joi.object({
    _id: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID de curso inválido',
            'any.required': 'Se requiere el ID del curso'
        }),

    user: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del usuario inválido',
            'any.required': 'Se requiere el ID del usuario',
        })
})

export default schema