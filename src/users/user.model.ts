import  {  DataTypes } from 'sequelize';
import {sequelize} from '../student/mysql.services';
import { Student } from 'src/student/student.model';

export  const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
User.hasMany(Student)
Student.belongsTo(User)

