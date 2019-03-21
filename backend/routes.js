const controllers = require('./controllers');

module.exports = app => {
	app
		.get('/cake/', controllers.allCakes)
		.get('/cake/:id', controllers.oneCake)
		.post('/cake/', controllers.createCake)
		.post('/cake/:id', controllers.createRating)
}