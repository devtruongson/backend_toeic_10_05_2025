import { Sequelize } from 'sequelize';
import dbConfig from '~/configs/db.config';
import createBlogModel from './blog.model';
import createExamModel from './exam.model';
import createHistoryModel from './history.model';
import createUserModel from './user.model';
import createCategoryModel from './category.model';
import createVocabularyModel from './vocabulary.model';

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
    blog: ReturnType<typeof createBlogModel>;
    category: ReturnType<typeof createCategoryModel>;
    vocabulary: ReturnType<typeof createVocabularyModel>;
    ROLES: string[];
}

const db: DB = {
    Sequelize,
    sequelize,
    user: createUserModel(sequelize),
    history: createHistoryModel(sequelize),
    exam: createExamModel(sequelize),
    blog: createBlogModel(sequelize),
    category: createCategoryModel(sequelize),
    vocabulary: createVocabularyModel(sequelize),
    ROLES: ['user', 'admin', 'moderator'],
};

// History-User/Exam (Many-to-One)
db.history.belongsTo(db.user, { foreignKey: 'userId' });
db.history.belongsTo(db.exam, { foreignKey: 'examId' });

db.user.hasMany(db.history, { foreignKey: 'userId' });
db.exam.hasMany(db.history, { foreignKey: 'examId' });

export default db;
