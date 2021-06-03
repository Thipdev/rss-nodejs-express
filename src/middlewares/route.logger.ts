import { Router, Request, Response } from 'express';
import { stdout } from 'process';

const routeLogger = (_req: Request, _res: Response, next: () => void) => {
    let date = new Date();
    let formatted_date = date.toString() + `\n`;
    stdout.write(formatted_date);
    next();
};

var router = Router();
router.use(routeLogger);

export { router };