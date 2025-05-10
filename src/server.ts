import 'dotenv/config';
import express, { Application } from 'express';
import configComperssion from './configs/compression.config';
import { startAndConnectDB } from './configs/connectDb.config';
import configCors from './configs/cors.config';
import configRequest from './configs/req.config';
import initialUploadRoute from './routes/upload.routes';

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

app.listen(PORT, () => {
    console.log('App Start Successfully With Port: ' + PORT);
});
