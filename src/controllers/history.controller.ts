import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import sendResponse from '~/helpers/response';
import db from '~/models';

class HistoryController {
    async getAllHistory(req: Request, res: Response) {
        try {
            const histories = await db.history.findAll({
                include: [
                    {
                        model: db.user,
                    },
                    {
                        model: db.exam,
                    },
                ],
            });
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'List History', histories));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async getHistoryById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const history = await db.history.findByPk(id, {
                include: [
                    {
                        model: db.user,
                    },
                    {
                        model: db.exam,
                    },
                ],
            });
            if (!history) {
                return res
                    .status(HttpStatusCode.NotFound)
                    .json(sendResponse(HttpStatusCode.NotFound, 'History Not Found', null));
            }
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'History', history));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async createHistory(req: Request, res: Response) {
        try {
            const { userId, examId, questions, time } = req.body;
            let count = 0;
            (questions || []).forEach((item: { answers: any[] }) => {
                if (item.answers.find((ans) => ans.isCorect && ans.isChoose)) {
                    count = count + 1;
                }
            });
            const history = await db.history.create({
                userId,
                examId,
                questions,
                score: String(count * 5),
                time,
            });
            return res
                .status(HttpStatusCode.Ok)
                .json(sendResponse(HttpStatusCode.Ok, 'Create History Success', history));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async updateHistory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { userId, examId, questions, score, time } = req.body;
            const history = await db.history.update({ userId, examId, questions, score, time }, { where: { id } });
            return res
                .status(HttpStatusCode.Ok)
                .json(sendResponse(HttpStatusCode.Ok, 'Update History Success', history));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async deleteHistory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const history = await db.history.destroy({ where: { id } });
            return res
                .status(HttpStatusCode.Ok)
                .json(sendResponse(HttpStatusCode.Ok, 'Delete History Success', history));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async getHistoryByUserId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const histories = await db.history.findAll({
                where: { userId: id },
                include: [
                    {
                        model: db.user,
                    },
                    {
                        model: db.exam,
                    },
                ],
            });
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'List History', histories));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }
}

export default new HistoryController();
