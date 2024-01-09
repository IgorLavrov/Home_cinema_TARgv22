

module.exports=(sequelize,Sequelize) =>{
    const Theatre = sequelize.define("Theatres",{
        id:{
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement:true

    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.Double,
        allowNull:false
    },
    rating:{
        type: Sequelize.INTEGER,
        allowNull:true
    },

    })
    
    return Theatre
}