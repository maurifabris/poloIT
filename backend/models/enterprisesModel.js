import mongoose from "mongoose";

//model for enterprises

const entSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    support: {
      type: String, 
    },
    dev: {
      type: String, 
    },
    scope: {
      type: String, 
    },
    employees: {
      type: String, 
    },
  },
  {
    timestamps: true,
  }
);

export const ent = mongoose.model("enterprise", entSchema);
