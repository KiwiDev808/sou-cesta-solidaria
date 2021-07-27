module.exports = (sequelize, DataType) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
      },
      phone: DataType.INTEGER,
      password: {
        type: DataType.STRING,
        allowNull: false,
      },
      premium: {
        type: DataType.BOOLEAN,
        defaultValue: false,
      },
      purchases: {
        type: DataType.INTEGER,
        defaultValue: 0,
      },
    },
    {
      tableName: "users",
    }
  );
  return User;
};
