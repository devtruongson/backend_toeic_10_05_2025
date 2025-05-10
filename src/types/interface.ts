import { Model } from 'sequelize';

export interface ExamAttributes {
    id?: number;
    Name: string;
    description: string;
    ltype: string;
    type: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ExamInstance extends Model<ExamAttributes>, ExamAttributes {}

export interface HistoryAttributes {
    id?: number;
    userId: number;
    examId: number;
    answers?: string;
    score?: string;
    time?: number;
    created_at?: Date;
}

export interface HistoryInstance extends Model<HistoryAttributes>, HistoryAttributes {}

export interface QuestionAttributes {
    id?: number;
    hasChild: number;
    parentId?: number;
    question?: string;
    answer?: string;
    tags?: string;
    type: string;
    orderIndex: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface QuestionInstance extends Model<QuestionAttributes>, QuestionAttributes {}

export interface RoleAttributes {
    id?: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface RoleInstance extends Model<RoleAttributes>, RoleAttributes {}

export interface UserAttributes {
    id?: number;
    username: string;
    email: string;
    password: string;
    phone?: string;
    name?: string;
    gender?: string;
    image?: string;
    uid?: string;
    isVerify: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}
