const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "file name must be provided"],
  },
  tokenId: {
    type: Number,
    required: [true, "token Id must be provided"],
    unique: true,
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  ipfsUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Token", productSchema);
