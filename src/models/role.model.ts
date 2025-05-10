import { DataTypes, Sequelize } from 'sequelize';
import { RoleInstance } from '~/types/interface';

export default (sequelize: Sequelize) => {
    const Role = sequelize.define<RoleInstance>('Role', {
        name: DataTypes.STRING,
    });

    return Role;
};
