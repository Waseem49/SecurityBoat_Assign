const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    imgUrl: { type: String, required: true },
    desc: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    rating: { type: String, required: true },
  },
  { versionkey: false }
);

export const productmodel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
