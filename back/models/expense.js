module.exports = (sequelize, DataTypes) => (
    sequelize.define('expense', {
        title: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        money: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        month: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
        day: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
    }, {
        timestamps: true,
        paranoid: true,
        charset:'utf8',
        collate:'utf8_general_ci',
    })
);