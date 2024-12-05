const mongoose = require("mongoose");
const Author = require('./author')
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref:"Author"},
    genre: { type: String, required: true },
    publishedOn: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
