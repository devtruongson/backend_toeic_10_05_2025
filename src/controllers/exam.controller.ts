import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import sendResponse from '~/helpers/response';
import db from '~/models';

class ExamController {
    async getAllExam(req: Request, res: Response) {
        try {
            const exams = await db.exam.findAll();
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'List Exam', exams));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async getExamById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const exam = await db.exam.findByPk(id);
            if (!exam) {
                return res
                    .status(HttpStatusCode.NotFound)
                    .json(sendResponse(HttpStatusCode.NotFound, 'Exam Not Found', null));
            }
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'Exam', exam));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async createExam(req: Request, res: Response) {
        try {
            const { title, description, type, questions } = req.body;
            const exam = await db.exam.create({ title, description, type, questions });
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'Create Exam Success', exam));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async updateExam(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, description, type, questions } = req.body;
            const exam = await db.exam.update({ title, description, type, questions }, { where: { id } });
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'Update Exam Success', exam));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }

    async deleteExam(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const exam = await db.exam.destroy({ where: { id } });
            return res.status(HttpStatusCode.Ok).json(sendResponse(HttpStatusCode.Ok, 'Delete Exam Success', exam));
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }
}

export default new ExamController();
