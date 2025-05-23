import { DataTypes, Sequelize } from 'sequelize';
import { BlogInstance } from '~/types/interface';

export default (sequelize: Sequelize) => {
    const Blog = sequelize.define<BlogInstance>('Blog', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT('long'),
        thumbnail: DataTypes.STRING,
    });

    return Blog;
};
