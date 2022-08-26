const mongoose = require('mongoose');

const mongoConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CS, (error) => {
            console.log(error)
        });
        console.log("Conexión a base de datos mongodb establecida");
    } catch (error) {
        console.log("Ocurrió un error al conectarse a la base de datos de mongodb", error);
    };
};

module.exports = { mongoConnection };