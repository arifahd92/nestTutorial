import { Sequelize }  from 'sequelize';
//console.log("from my sql")
//console.log(process.env)
//console.log(process.env.DB_NAME)
export const sequelize = new Sequelize({
  database:  "nest",
  username: 'root',
  password: 'Admin#123',
  host: 'localhost',
  dialect: 'mysql',
});

