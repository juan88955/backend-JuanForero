import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string()
        .required()
        .min(2)
        .messages({
            'string.empty': 'El nombre es requerido',
            'string.min': 'El nombre debe tener al menos 2 caracteres',
            'any.required': 'Se requiere el nombre del proyecto a eliminar'
        })
})

export default schema