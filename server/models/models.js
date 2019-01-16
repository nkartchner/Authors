const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authors', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { });

const AuthorsSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        minlength:[3, 'The authors name must be a least 3 characters long']
    },
}, { timestamps: true });

module.exports = mongoose.model('authors', AuthorsSchema);