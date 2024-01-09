const TheatreController= require('../Controllers/TheatreControllers.js')

module.exports= (app)=>{
    app.route("/theatres")
    .get(TheatreController.getAll)
}
