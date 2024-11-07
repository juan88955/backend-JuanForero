import joi from 'joi-oid'

const schema = joi.object({
    courseId: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    title: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    instructor: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    department: joi.string().required().messages({
        'string.base': 'El nombre debe ser alfanumérico',
        'string.alphanum': 'No uses caracteres especiales'
    }),
    credits: joi.number().required().min(1).max(5).messages({
        'number.min': 'Minimo son 1 digito',
        'number.max': 'Maximo son 5 digitos'
    }),
    capacity: joi.number().required().min(1).max(5).messages({
        'number.min': 'Minimo son 1 digito',
        'number.max': 'Maximo son 5 digitos'
    }),
    enrollmentCount: joi.number().required().min(1).max(5).messages({
        'number.min': 'Minimo son 1 digito',
        'number.max': 'Maximo son 5 digitos'
    }),
    isOnline: joi.boolean().required(),
    startDate: joi.date().required(),
    duration: joi.number().required().min(1).max(5).messages({
        'number.min': 'Minimo son 1 digito',
        'number.max': 'Maximo son 5 digitos'
    }),
    user: joi.objectId()
})

export default schema