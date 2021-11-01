const dbModels = require("../models");

module.exports = function(app) {
    // Gets info for workout page
    app.get("/api/workouts", (req, res) => {
        dbModels.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
    // Gets info for the ranges page
    app.get("/api/workouts/range", ({}, res) => {
      dbModels.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
    });
    // Post call is made for completed workouts
    app.post("/api/workouts/", (req, res) => {
        dbModels.Workout.create(req.body).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
          });
      });
      // Update made using id for data set
      app.put("/api/workouts/:id", (req, res) => {
        dbModels.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkout) => {
          res.json(dbWorkout);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};