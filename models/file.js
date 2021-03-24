const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
  {
    value: Number,
    fileName: String,
    imageUrl: String,
    idUser: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
