import { Application, Router } from 'express';
import authController from '~/controllers/auth.controller';

const route = Router();

export default function initialAuthRoute(app: Application) {
    route.post('/register', authController.registerUser);

    app.use('/api/v1/auth', route);
}
