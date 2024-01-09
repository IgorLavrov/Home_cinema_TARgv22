const TheatreController= require('./controllers/TheatreControllers.js')

module.exports= (app)=>{
    app.route("/theatres")
    .get(TheatreController.getAll)
}
