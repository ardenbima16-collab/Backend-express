import express, { Request, Response, NextFunction } from 'express';
import { logger } from './middlewarres/logger';
import UserRoutes from './Routes/UserRoutes';

const app = express();

// middleware
app.use(express.json());
app.use(logger);

// routes
app.use('/api', UserRoutes);

// root endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

// 404 handler
app.use((req: Request, res: Response) => {
    res.status(404).json({
        status: "Error",
        message: "Route tidak ditemukan"
    });
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        status: "Error",
        message: "Terjadi kesalahan pada server"
    });
});

// start server
app.listen(3000, () => {
    console.log('server berjalan pada port 3000');
});