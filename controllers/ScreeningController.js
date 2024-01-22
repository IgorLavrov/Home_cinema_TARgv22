const {db} = require('../db');
const Screening = db.screenings
const Theatre= db.theaters

// exports.getAll = async (req, res) => {
//     const screening = await Screening.findAll({attributes:["id","filmsID","theatersID"]})
//     res.send(screening)
//     // res.json(screening)

// }

exports.getAll = async (req, res) => {
    const screening = await Screening.findAll({
        include:{all:true},
        logging:console.log
        // attributes:["ID","filmsID","theatersID"]})
//     res.send(screening)
})
console.log(screening)
let result=[]
result=screening.map((lp)=>{
    return{
        "theatreName":lp.theatre.name,
        "films":'$(lp.films.name)'
    }
})
res.send(result)
}

exports.getById = async (req,res) => {
    const screening = await Screening.findByPk(req.params.id)
    
    if (screening === null) {
        res.status(404).send({"error":"Service not found"})
        return
    }
    res.send(screening)
}

exports.createNew = async (req, res) => {
    console.log(req.body)
    //const Service = await Service.create(req.body)
    let screening
    try {
        screening = await Screening.create(req.body)
    } catch (error) {
        if(error instanceof db.Sequelize.ValidationError) {
            console.log(error)
            res.status(400).send({"error":"Invalid Input"})
        } else {
            console.log("ScreeningCreate", error)
            res.status(500).send({"error":"Server error, try again later"})
        }
        return
    }
    res
        .status(201)
        .location(`${getBaseUrl(req)}/screenings/${screening.id}`)
        .json(screening)
}

exports.updateById = async(req,res)=>{
    let result
    delete(req.body.id)
    try{
        result = await Screening.update(req.body,{where:{id:req.params.id}})
    }catch(error){
        console.log("ScreeningUpdate:",error)
        res.status(500).send({"error":"server error,try again later"})
        return
    }

    if(result===0||result===undefined){
        res.status(404).send({"error":"Screening not found"})
        return
    }

    const screening= await Screening.findByPk(res.params.id)
    res.status(200)
    .location('${getBaseUrl(req)}/screenings/${screening.id}')
    .json(screening)

    
}

exports.deleteById = async(req,res)=>{
    let result 
    try {
        result= await Screening.destroy({where:{id: req.params.id}})
    } catch (error) {
        
            console.log("ScreeningCreateDelete",error)
            res.status(500).send({"error":"server error,try again later"})
    
        return
    }

    if(result === 0 || result === undefined){
        res.status(404).send({"error":"Film not found"})
        return
    }

    res.status(204).send()
}


getBaseUrl = (request) => {
    return (
        (request.connection && request.connection.encrypted ? "https" : "http" ) +
        `://${request.headers.host}`
    )
}