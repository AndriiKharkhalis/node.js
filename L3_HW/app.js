const express = require('express');
const { engine } = require('express-handlebars');
const { PORT } = require('./config/config');

const carsRouter = require('./routes/cars.routers');
const userRouter = require('./routes/user.router');
const reportRouter = require('./routes/report.router');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('.hbs', engine({ defaultLayout: false }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/cars', carsRouter);
app.use('/reports', reportRouter);
app.use('/users', userRouter);

app.get('/welcome', (req, res) => {

   res.render('welcome');
})


app.listen(PORT, () => {
   console.log(`App listen ${PORT}`)
});