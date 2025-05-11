import { DataTypes, Sequelize } from 'sequelize';
import { ExamInstance } from '~/types/interface';

export default (sequelize: Sequelize) => {
    const Exam = sequelize.define<ExamInstance>('Exam', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        type: {
            type: DataTypes.STRING,
            defaultValue: 'fulltest',
        },
        questions: DataTypes.JSON,
    });

    return Exam;
};
