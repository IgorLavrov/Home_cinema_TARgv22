// // const { sequelize, Sequelize } = require("../db")
module.exports =(sequelize,Sequelize,Theatre,Film) => {
    const Screening= sequelize.define("screenings",{
        id :{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        filmsID:{
            type:Sequelize.INTEGER,
            references:{
                model:Film,
                key:"Id",
            }
        },
        theatersID:{
            type:Sequelize.INTEGER,
            references:{
                model: Theatre,
                key:"Id",
            }
        }

    })
    Theatre.belongsToMany(Film,{through:Screening})
    Film.belongsToMany(Theatre,{through:Screening})
    Theatre.hasMany(Screening)
    Screening.belongsTo(Theatre)
    Film.hasMany(Screening)
    Screening.belongsTo(Film)

    return Screening
}