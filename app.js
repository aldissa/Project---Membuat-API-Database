const express = require('express');
const logger = require('./middlewares/logger')
const auth = require('./middlewares/userAuth')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');

dotenv.config();

const app = express();

app.use(logger);
app.use(auth);
app.use(bodyParser.json());
app.use('/api/books', userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api/books`);
});