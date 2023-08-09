import joi from "joi";

export const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required(),
    city: joi.string().required(),
    phone: joi.string().min(10).max(11).required().regex(/^\d+$/)
})

export const signinSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required()
})