import {sequenlize} from "sequelize";
import db from "../db/database.js";

const {DataTypes} = sequenlize;

const user = db.define('produk', {
    produk: DataTypes.STRING,
    jumlahProduk: DataTypes.STRING,
    harha: DataTypes.STRING

}, {
    freezTableName: true
});

export default user;

(async() => {
    await db.sync();
})();
