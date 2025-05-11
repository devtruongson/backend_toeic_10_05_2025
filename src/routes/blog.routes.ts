import { Application, Router } from 'express';
import blogController from '~/controllers/blog.controller';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const route = Router() as any;

export default function initialBlogRoute(app: Application) {
    route.get('/:id', blogController.getBlogById);
    route.get('/', blogController.getAllBlog);
    route.post('/', blogController.createBlog);
    route.put('/:id', blogController.updateBlog);
    route.delete('/:id', blogController.deleteBlog);

    app.use('/api/v1/blog', route);
}
