const DBusers = require('../dataBase/users');

module.exports = {
   getAllUsers: (req, res) => {
      res.render('users', { DBusers })
   },

   createUser: (req, res) => {
      DBusers.push(req.body);
      res.json(DBusers);
   },

   getUserById: (req, res) => {
      const { userIndex } = req.params;
      const user = DBusers[userIndex];

      if (!user) {
         res.status(404).json('User with ID ${userIndex} not found');
         return;
      }
      res.json(user);
   }
}