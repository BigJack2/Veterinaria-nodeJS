import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: String,
  race: String,
  weight: Number,
  height: Number,
  healt: String,
  age: Number,
  user: { type: mongoose.Schema.ObjectId, ref: "users" },
  dbStatus: Boolean,
});

const animal = mongoose.model("animals", animalSchema);

export default animal;