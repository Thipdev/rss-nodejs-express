import { Router, Request, Response, NextFunction} from 'express';
import { catApi } from '../common/logger-config';

const logger = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    catApi.info(`${req.method}: ${req.url}`);
    catApi.info(`Query params: ${JSON.stringify(req.query)}`);
    catApi.info(`Body: ${JSON.stringify(req.body)}`);
    catApi.info(`Response status code: ${res.statusCode}`);
    next();
};

var router = Router();
router.use(logger);

export { router, logger };