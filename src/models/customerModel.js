const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String },
    role: {
      type: String,
      required: true,
      enum: ["customer", "admin"],
      default: "customer",
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 5 },
  },
  { versionkey: false }
);

export const customermodel =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);
