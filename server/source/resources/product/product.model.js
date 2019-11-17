const mongoose = require("mongoose");

const productAvailabilitySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    enabled: {
      type: Boolean,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

const ProductAvailability = mongoose.model(
  "productAvailability",
  productAvailabilitySchema
);

module.exports = ProductAvailability;
