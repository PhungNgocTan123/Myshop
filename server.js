require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

// routes
const itemRoutes = require('./routes/api/items');
const userRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');

const app = express();

// -------> Bodyparser Middleware 
app.use(express.json());

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
const db = config.get('mongoURI');

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true,
})
    .then(() => console.log('MongoDB connected ....'))
    .catch(() => console.log(err));

// Use Routes
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));