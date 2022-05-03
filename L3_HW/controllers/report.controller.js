module.exports = {
   getReports: (req, res) => {
      res.json([
         { April: 15000 },
         { May: 50000 }
      ])
   }
}