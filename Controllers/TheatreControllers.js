const db=require('../db');
const theater=db.Theatres

// const pool = mariadb.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASS,
//     database: process.env.NAME,
//     connectionLimit: 5
// })

exports.getAll = async(req,res)=>{
    const theaters=await theater.findAll({attributes:["theatre"]})
    res.send(theaters)
    // let connection
    // try{
    //     connection=await pool.getConnection()
    //     const rows =await connection.query("SELECT id,name from games")
    //     res.send(rows)
    // }catch(error){
    //     throw error
    // }finally{
    //     if(connection)return connection.end()
    // }
}