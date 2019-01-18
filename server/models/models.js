const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authorsQuotes3', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { });

const AuthorsSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        minlength:[3, 'The authors name must be a least 3 characters long']
    },
    quotes:[{
        // id:{type:String, unique:true},
        body: {
            type:String,
            minlength:[3, 'The authors name must be a least 3 characters long']
        },
        votes: {type:Number},
    }]
}, { timestamps: true });

module.exports = mongoose.model('authors', AuthorsSchema);