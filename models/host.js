 module.exports = function(sequelize, DataTypes) {
    const Animal = sequelize.define("Animal", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1,100]
            }
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1,10]
            }
        }
    });

    return Animal;
}; 