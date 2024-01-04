const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    imgUrl: { type: String, required: true },
    desc: { type: String, required: true, unique: true },
    price: { type: Number, required: true, min: 100 },
    rating: { type: Number, required: true, max: 5 },
  },
  { versionkey: false }
);

export const productmodel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
