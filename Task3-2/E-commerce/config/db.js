import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const URL_DB = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD}@cluster0.doffygm.mongodb.net/?retryWrites=true&w=majority`;

    const conn = await mongoose.connect(URL_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: process.env.DB_NAME,
    });
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
