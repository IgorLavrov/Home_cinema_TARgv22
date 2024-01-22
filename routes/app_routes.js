const TheatresController = require('../controllers/TheatresController.js')
const FilmsController=require('../controllers/FilmsController.js')
const ScreeningController=require('../controllers/ScreeningController.js')


module.exports = (app) => {
    app.route("/theaters")   
        .get(TheatresController.getAll) 
        .post(TheatresController.createNew)
        app.route("/theaters/:id")
        .get(TheatresController.getById) 
        .put(TheatresController.updateById)
        .delete(TheatresController.deleteById) 
    app.route("/films")
      .get(FilmsController.getAll) 
      .post(FilmsController.createNew)
    app.route("/films/:id")
      .get(FilmsController.getById)
      .put(FilmsController.updateById)
      .delete(FilmsController.deleteById)
      app.route("/screenings")
      .get(ScreeningController.getAll) 
      .post(ScreeningController.createNew)
    app.route("/screenings/:id")
      .get(ScreeningController.getById)
      .put(ScreeningController.updateById)
      .delete(ScreeningController.deleteById)
}


