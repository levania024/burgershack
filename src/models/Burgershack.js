import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
    name: { type: String, require: true, maxlength: 100, minlength: 2 },
    ingredients: { type: String, maxlength: 100, require: true },
    classicToppings: { type: String, maxlength: 100 },
    additionalToppings: { type: String, maxlength: 100 },
    extras: { type: String, maxlength: 100 },
    price: { type: Number, require: true, maxlength: 6, minlength: 2 }
})