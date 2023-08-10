import joi from "joi";

export const serviceSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().greater(0),
    photo: joi.string().uri().required(),
})