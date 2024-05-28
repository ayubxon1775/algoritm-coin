const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser')
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express()

const PORT = process.env.PORT || 5000;
if (!process.env.PORT) {
    console.error("PORT enviroment varieble is not set. Defaulting to 3000.")
}

app.use(express.json());
app.use(cors());
app.use(cookieparser());
app.use('/api/auth', authRoutes);

sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch (err => {
        console.log('unable to conncct to the database', err);
    });