import {Sequelize} from "sequelize";

const db = new Sequelize('Gerysaon_app','root','Ignasius',{
    host: '127.0.0.1',
    user: 'root',
    Password: 'Ignasius',
    database: 'Gerysaon_app',
    port: 3306
});

export default db;