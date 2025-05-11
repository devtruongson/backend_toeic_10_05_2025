import { Application, Router } from 'express';
import historyController from '~/controllers/history.controller';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const route = Router() as any;

export default function initialHistoryRoute(app: Application) {
    route.get('/', historyController.getAllHistory);
    route.get('/:id', historyController.getHistoryById);
    route.post('/', historyController.createHistory);
    route.put('/:id', historyController.updateHistory);
    route.delete('/:id', historyController.deleteHistory);
    route.get('/user/:id', historyController.getHistoryByUserId);

    app.use('/api/v1/history', route);
}
