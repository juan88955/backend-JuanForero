import joi from 'joi-oid'

const schema = joi.object({
    _id: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID de empleado inválido',
            'any.required': 'Se requiere el ID del empleado'
        }),

    proyecto: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del proyecto inválido',
            'any.required': 'Se requiere el ID del proyecto',
        })
})

export default schema