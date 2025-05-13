import { DataTypes, Sequelize } from 'sequelize';
import { VocabularyInstance } from '~/types/interface';

export default (sequelize: Sequelize) => {
    const Vocabulary = sequelize.define<VocabularyInstance>('Vocabulary', {
        word: DataTypes.STRING,
        definition: DataTypes.STRING,
        example: DataTypes.STRING,
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Vocabulary;
};
