module.exports = (sequelize, DataTypes) => (
    sequelize.define('tag', {
        title: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
    }, {
        timestamps: true,
        paranoid: true,
        charset:'utf8',
        collate:'utf8_general_ci',
    })
);