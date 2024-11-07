import joi from 'joi-oid'

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    description: joi.string().required().messages({
        'string.base': 'La descripción debe ser alfanumérica',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    startDate: joi.date().required(),
    expectedEndDate: joi.date().required(),
    budget: joi.number().required().min(10000).max(1000000).messages({
        'number.min': 'Minimo son 10000',
        'number.max': 'Maximo son 1000000'
    }),
    clientId: joi.number().required().min(1).max(5).messages({
        'number.min': 'Minimo son 1 digito',
        'number.max': 'Maximo son 5 digitos'
    }),
    isCompleted: joi.boolean().required(),
    priority: joi.number().required().min(1).max(5).messages({
        'number.min': 'Minimo son 1 digito',
        'number.max': 'Maximo son 5 digitos'
    }),
    teamSize: joi.number().required().min(2).max(5).messages({
        'number.min': 'Minimo son 2 digitos',
        'number.max': 'Maximo son 5 digitos'
    }),
    status: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    empleado: joi.objectId()
})

export default schema