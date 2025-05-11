import { Sequelize } from 'sequelize';
import dbConfig from '~/configs/db.config';
import createExamModel from './exam.model';
import createHistoryModel from './history.model';
import createUserModel from './user.model';

// Create Sequelize instance
const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.USER_NAME, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    logging: false,
});

// Database interface
interface DB {
    Sequelize: typeof Sequelize;
    sequelize: Sequelize;
    user: ReturnType<typeof createUserModel>;
    history: ReturnType<typeof createHistoryModel>;
    exam: ReturnType<typeof createExamModel>;
    ROLES: string[];
}

const db: DB = {
    Sequelize,
    sequelize,
    user: createUserModel(sequelize),
    history: createHistoryModel(sequelize),
    exam: createExamModel(sequelize),
    ROLES: ['user', 'admin', 'moderator'],
};

// History-User/Exam (Many-to-One)
db.history.belongsTo(db.user, { foreignKey: 'userId' });
db.history.belongsTo(db.exam, { foreignKey: 'examId' });

db.user.hasMany(db.history, { foreignKey: 'userId' });
db.exam.hasMany(db.history, { foreignKey: 'examId' });

export default db;
