import { Request, Response, NextFunction } from 'express';
import { stderr } from 'process';

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    stderr.write('err.message');
    res.status(500).send({ error: err.message });
};

export { errorHandler };