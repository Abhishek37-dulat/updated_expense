import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";

interface OrderAttributes {
  id: number;
  paymentId: string;
  orderId: string;
  status: string;
}

class Order extends Model<OrderAttributes> implements OrderAttributes {
  public id!: number;
  public paymentId!: string;
  public orderId!: string;
  public status!: string;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    paymentId: {
      type: DataTypes.STRING,
    },
    orderId: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
  }
);

export { Order };
