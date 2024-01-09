const Sequelize=require('sequelize');
const sequelize= new Sequelize(
    process.env.Name,
    process.env.USER,
    process.env.PASS,
    {
        host:procces.env.HOST,
        dialect:"mariadb",
        define:{
            timestamps:false
        }
    }
);
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
db.theatres= require("../models/Theatre.model")(sequelize,Sequelize)


async function Sync(){
    await sequelize.sync({alter:true})//modifies existing tabler
    //forces:true erases existing table and recreates it 
}

moduls.exports= {db,Sync}