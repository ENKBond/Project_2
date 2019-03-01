module.exports = function(sequelize, DataTypes) {
    var Host = sequelize.define("Host", {
        host_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        chat_room: {
            type: DataTypes.STRING,
            validate: {
                len: [1,100]
            }
        }
    });
    return Host;
};