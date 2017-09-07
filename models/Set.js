const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  //userId: { type: Schema.Types.ObjectId, required: false },
  cards: { type: []}
});

const Set = mongoose.model('Set', schema);
module.exports = Set;
