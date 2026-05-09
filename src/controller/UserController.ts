import { Request, Response } from 'express';
import { db } from  "../db";
import {users} from "../db/schema";

export const getUser = async(req: Request, res: Response) => {
    try {
        const allUsers = await db.select().from(users);

        res.json({
        status: "Success",
        data: allUsers   
    });
} catch (eror) {
    res.status((500)).json({
        message: "gagal mengambil data user"
    })
}

};
 
export const creatUser = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        await db.insert(users).values({ name });

        res.status(201).json({
            status : "succes",
            message: `users ${name} berhasil dibuat`
        });

    } catch (error) {
        res.status(201).json({
            message: "User berhasil dibuat"
        });
    }
};