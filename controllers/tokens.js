const { modelName } = require("../models/token");
const Token = require("../models/token");

const getPublicTokens = async (req, res) => {
  const tokens = await Token.find({ isPrivate: false }).sort("createdAt");
  res.status(200).json({ tokens, nbHits: tokens.lenght });
};

const createToken = async (req, res) => {
  const token = await Token.create(req.body);
  res.status(201).json({ token });
};

module.exports = {
  getPublicTokens,
  createToken,
};
