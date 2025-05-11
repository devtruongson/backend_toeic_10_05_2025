import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { endCodePassword } from '~/helpers/bcrypt';
import sendResponse from '~/helpers/response';
import db from '~/models';

class AuthController {
    async registerUser(req: Request, res: Response) {
        try {
            const checkUserExits = await db.user.findOne({
                where: {
                    email: req.body.email,
                },
            });

            if (checkUserExits) {
                return res
                    .status(HttpStatusCode.BadRequest)
                    .json(sendResponse(HttpStatusCode.BadRequest, 'Email Exits', null));
            }

            const passwordHash = endCodePassword(req.body.password);
            const userCreate = await db.user.create({
              email: 
            })
            
        } catch (error) {
            return res
                .status(HttpStatusCode.BadGateway)
                .json(sendResponse(HttpStatusCode.BadGateway, `${error}`, null));
        }
    }
}

export default new AuthController();
