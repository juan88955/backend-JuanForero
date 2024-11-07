import joi from 'joi-oid'

const schema = joi.object({
    _id: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID de proyecto inválido',
            'any.required': 'Se requiere el ID del proyecto'
        }),

    empleado: joi.objectId()
        .required()
        .messages({
            'string.pattern.name': 'ID del empleado inválido',
            'any.required': 'Se requiere el ID del empleado',
        })
})

export default schema