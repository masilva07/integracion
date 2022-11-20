const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://mongo_db/integracion", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("base de datos online");
    } catch (error) {
        console.log(error);
        throw new Error("Error al momento de iniciar la base de datos");
    }
};

module.exports = {
    dbConnection,
};
