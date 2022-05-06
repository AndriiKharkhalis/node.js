const { Router } = require('express');

const carController = require('../controllers/cars.controller');

const carsRouter = Router();

carsRouter.get('/', carController.getAllCars);

carsRouter.get('/:carsIndex', carController.getCarById);

carsRouter.delete('/:carIndex', carController.deleteCar);

carsRouter.put('/:carIndex', carController.updateCar);

module.exports = carsRouter;