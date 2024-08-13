const { DataTypes } = require("sequelize");

const vehicle = sequelize => {
    sequelize.define('vehicle', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        
    })
}