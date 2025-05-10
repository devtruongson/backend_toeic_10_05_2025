import { DataTypes, Sequelize } from 'sequelize';
import { ExamInstance } from '~/types/interface';

export default (sequelize: Sequelize) => {
    const Exam = sequelize.define<ExamInstance>('Exam', {
        Name: DataTypes.STRING,
        description: DataTypes.STRING,
        ltype: {
            type: DataTypes.STRING,
            defaultValue: 'toeic',
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 'fulltest',
        },
    });

    return Exam;
};
