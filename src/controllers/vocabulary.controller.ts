import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import sendResponse from '~/helpers/response';
import db from '~/models';

class VocabularyController {
    async getVocabularyById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vocabulary = await db.vocabulary.findByPk(id);
            if (!vocabulary) {
                return res
                    .status(HttpStatusCode.NotFound)
                    .json(sendResponse(HttpStatusCode.NotFound, 'vocabulary Not Found', null));
            }
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'vocabulary', vocabulary));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async getAllVocabulary(req: Request, res: Response) {
        try {
            const vocabularise = await db.vocabulary.findAll();
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'List vocabulary', vocabularise));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async createVocabulary(req: Request, res: Response) {
        try {
            const { word, definition, example, categoryId } = req.body;
            const vocabulary = await db.vocabulary.create({ word, definition, example, categoryId });
            return res
                .status(HttpStatusCode.Ok)
                .json(sendResponse(HttpStatusCode.Ok, 'Create vocabulary Success', vocabulary));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async updateVocabulary(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { word, definition, example, categoryId } = req.body;
            const vocabulary = await db.vocabulary.update({ word, definition, example, categoryId }, { where: { id } });
            return res
                .status(HttpStatusCode.Ok)
                .json(sendResponse(HttpStatusCode.Ok, 'Update vocabulary Success', vocabulary));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async deleteVocabulary(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vocabulary = await db.vocabulary.destroy({ where: { id } });
            return res
                .status(HttpStatusCode.Ok)
                .json(sendResponse(HttpStatusCode.Ok, 'Delete vocabulary Success', vocabulary));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async getVocabularyByCategoryId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const vocabulary = await db.vocabulary.findAll({
                where: { categoryId: id },
            });
            if (!vocabulary) {
                return res
                    .status(HttpStatusCode.NotFound)
                    .json(sendResponse(HttpStatusCode.NotFound, 'vocabulary Not Found', null));
            }
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'vocabulary', vocabulary));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }
}

export default new VocabularyController();
