require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// routes
const itemRoutes = require('./routes/api/items');

const app = express();

// ---------> Bodyparser Middleware 
app.use(bodyParser.json());

// Connect to mongodb 
// const uri = process.env.DATABASE_URI;

// mongoose.connect(uri, {
//     useNewUrlParser: true
// });

// const db = mongoose.connection
// // Check connect database 
// db.on('error', error => console.error(error));
// db.once('open', () => console.log('Conected to Mongoose'))

//  --------> Connect database
const db = require('./config/keys').mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected ....'))
    .catch(() => console.log(err));

// Use Routes
app.use('/api/items', itemRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));