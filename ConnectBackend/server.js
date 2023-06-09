const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/users');


require ('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/users', userRoutes);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

app.listen(3001)