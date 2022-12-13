const mongoose = require('mongoose');

const MongoDB = async function main () {
    await  mongoose.connect('mongodb://localhost:27017/praktikumkk4c');
    console.log('Database connected')
}

module.exports = MongoDB