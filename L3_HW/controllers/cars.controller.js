const DBcars = require('../dataBase/cars');

module.exports = {
   getAllCars: (req, res) => {
      res.render('cars', { DBcars })
   },

   getCarById: (req, res) => {
      const { carsIndex } = req.params;
      const car = DBcars[carsIndex];

      if (!car) {
         res.status(404).json('Car with ID ${carsIndex} not found');
         return;
      }

      res.json(car);
   }
}