const models = require('./models');

module.exports = {
  allCakes: (req, res) => {
    models.Cake.find()
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  oneCake: (req, res) => {
    const ID = req.params.id;
    models.Cake.find({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  createCake: (req, res) => {
    const DATA = req.body;
    console.log('in here!!!\n' + DATA)
    models.Cake.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  getRatings: (req, res) => {
    models.Rating.find()
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  createRating: (req, res) => {
    const DATA = req.body;
    models.Rating.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err))
  }
}