import { DataTypes, Sequelize } from 'sequelize';
import { QuestionInstance } from '~/types/interface';

export default (sequelize: Sequelize) => {
    const Question = sequelize.define<QuestionInstance>('Question', {
        hasChild: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        question: {
            type: DataTypes.JSON,
        },
        answer: {
            type: DataTypes.JSON,
        },
        tags: {
            type: DataTypes.JSON,
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 't1',
        },
        orderIndex: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    });

    return Question;
};
