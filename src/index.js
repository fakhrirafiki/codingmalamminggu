const express = require('express');
const apisRoute = require('./routes/apisRoute');
const viewsRoute = require('./routes/viewsRoute');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static('public'));

//setting View Engine
app.set('view engine', 'ejs'); // kasih tau templete engine ke aplikasinya
app.set('views', 'src/views'); // kasih tau EJS nya letak folder viewsnya

//routing
app.use('/', viewsRoute);
app.use('/apis', apisRoute);


app.listen(3001, () => console.log(`listenning...`));