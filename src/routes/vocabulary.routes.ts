import { Application, Router } from 'express';
import vocabularyController from '~/controllers/vocabulary.controller';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const route = Router() as any;

export default function initialVocabularyRoute(app: Application) {
    route.get('/:id', vocabularyController.getVocabularyById);
    route.get('/', vocabularyController.getAllVocabulary);
    route.post('/', vocabularyController.createVocabulary);
    route.put('/:id', vocabularyController.updateVocabulary);
    route.delete('/:id', vocabularyController.deleteVocabulary);
    route.get('/category/:id', vocabularyController.getVocabularyByCategoryId);

    app.use('/api/v1/vocabulary', route);
}
