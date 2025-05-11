import { DataTypes, Sequelize } from 'sequelize';
import { UserInstance } from '~/types/interface';

export default (sequelize: Sequelize) => {
    const User = sequelize.define<UserInstance>('User', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        name: DataTypes.STRING,
        gender: DataTypes.STRING,
        image: DataTypes.STRING,
        uid: DataTypes.STRING,
        role: DataTypes.STRING,
    });

    return User;
};
