const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Silahkan isi nama dulu'],
        unique: true
    },
    email: {
        type: String,
        required: [true],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isi email yang valid']
    }
})

module.exports = mongoose.model('User', userSchema);