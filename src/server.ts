import 'dotenv/config';
import express, { Application } from 'express';
import configComperssion from './configs/compression.config';
import { startAndConnectDB } from './configs/connectDb.config';
import configCors from './configs/cors.config';
import configRequest from './configs/req.config';
import initialAuthRoute from './routes/auth.routes';
import initialBlogRoute from './routes/blog.routes';
import initialExamRoute from './routes/exam.routes';
import initialHistoryRoute from './routes/history.routes';
import initialUploadRoute from './routes/upload.routes';
import initialUserRoute from './routes/user.routes';
import initialCategoryRoute from './routes/category.routes';
import initialVocabularyRoute from './routes/vocabulary.routes';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '8080');

// load configs
configComperssion(app);
configCors(app);
configRequest(app);

// config database
startAndConnectDB();

// router
initialUploadRoute(app);
initialAuthRoute(app);
initialUserRoute(app);
initialBlogRoute(app);
initialExamRoute(app);
initialHistoryRoute(app);
initialCategoryRoute(app);
initialVocabularyRoute(app);

app.listen(PORT, () => {
    console.log('App Start Successfully With Port: ' + PORT);
});
