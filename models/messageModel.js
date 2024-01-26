module.exports = (sequelize, DataTypes) => {
    const messageModel = sequelize.define(
        'messageModel',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            message: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            createdAt: {
                field: "created_at",
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                field: "updated_at",
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName:
                'tb_message'
        }
    );

    return messageModel;
}