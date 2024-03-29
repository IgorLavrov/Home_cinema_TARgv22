const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.NAME,
    process.env.USER,
    process.env.PASS,
    {
        host: process.env.HOST,
        dialect: "mariadb",
        define: {
            timestamps: false
        }
    }
);

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.theaters = require("./models/Theatre.model")(sequelize,Sequelize)
db.films = require("./models/Film.model")(sequelize,Sequelize)
db.screenings = require("./models/Screening.model")(sequelize,Sequelize,db.theaters,db.films)

module.exports = db

async function Sync() {
    await sequelize.sync({alter:true})
}

module.exports = {db, Sync}

