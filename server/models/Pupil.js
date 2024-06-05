const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Pupil = sequelize.define('Pupil', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
        type: DataTypes.ENUM('mentor', 'admin', 'pupil'),
        defaultValue: 'pupil'
    },
    route: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Pupil;