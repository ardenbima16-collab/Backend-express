import { Request, Response } from 'express';

export const getUser = (req: Request, res: Response) => {
    const users = [
        { id: 1, name: "panji" },
        { id: 2, name: "Davi" }
    ];

    res.json({
        status: "Success",
        data: users
    });
};

export const creatUser = (req: Request, res: Response) => {
    const { name } = req.body;

    res.status(201).json({
        status: "Success",
        message: `user ${name} berhasil dibuat`
    });
};