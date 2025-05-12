import { DataTypes, Sequelize } from 'sequelize';
import { BlogInstance } from '~/types/interface';

export default (sequelize: Sequelize) => {
    const Blog = sequelize.define<BlogInstance>('Blog', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
    });

    return Blog;
};
