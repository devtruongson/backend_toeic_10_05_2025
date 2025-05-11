import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import sendResponse from '~/helpers/response';
import db from '~/models';

class BlogController {
    async getBlogById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const blog = await db.blog.findByPk(id);
            if (!blog) {
                return res
                    .status(HttpStatusCode.NotFound)
                    .json(sendResponse(HttpStatusCode.NotFound, 'Blog Not Found', null));
            }
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'Blog', blog));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async getAllBlog(req: Request, res: Response) {
        try {
            const blogs = await db.blog.findAll();
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'List Blog', blogs));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async createBlog(req: Request, res: Response) {
        try {
            const { title, content } = req.body;
            const blog = await db.blog.create({ title, content });
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'Create Blog Success', blog));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async updateBlog(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, content } = req.body;
            const blog = await db.blog.update({ title, content }, { where: { id } });
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'Update Blog Success', blog));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async deleteBlog(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const blog = await db.blog.destroy({ where: { id } });
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'Delete Blog Success', blog));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }
}

export default new BlogController();
