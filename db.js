const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library-management-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book };
