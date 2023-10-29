import mongoose from "mongoose";

const entSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },     
        description: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
    }
)

export const ent = mongoose.model('enterprise', entSchema)