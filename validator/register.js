const Joi = require('joi');

module.exports.validate = (data) => {
    const schema = Joi.object({
        inputName: Joi.string()
            .min(2)
            .max(36)
            .required(),
    
        inputEmail: Joi.string()
            .email()
            .required(),
    
        inputMobile: Joi.string()
            .min(10)
            .max(10)
            .required(),
    
        inputPincode: Joi.string()
        .min(6)
        .max(6)
        .required(),
    })

    return schema.validate(data);
}
