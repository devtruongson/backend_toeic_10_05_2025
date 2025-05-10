import { Application, Router } from 'express';
const route = Router();

export default function initialUploadRoute(app: Application) {
    app.use('/api/v1', route);
}
