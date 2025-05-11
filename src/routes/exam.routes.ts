import { Application, Router } from 'express';
import examController from '~/controllers/exam.controller';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const route = Router() as any;

export default function initialExamRoute(app: Application) {
    route.get('/', examController.getAllExam);
    route.get('/:id', examController.getExamById);
    route.post('/', examController.createExam);
    route.put('/:id', examController.updateExam);
    route.delete('/:id', examController.deleteExam);

    app.use('/api/v1/exam', route);
}
