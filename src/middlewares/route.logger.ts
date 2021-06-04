import { Router, Request, Response, NextFunction} from 'express';
import { catApi } from '../common/logger-config';

const routeLogger = (req: Request, res: Response, next: NextFunction) => {
    catApi.info(`${req.method}: ${req.url}`);
    catApi.info(`Params: ${JSON.stringify(req.params)}`);
    catApi.info(`Body: ${JSON.stringify(req.body)}`);
    catApi.info(`Response status code: ${res.statusCode}`);
    next();
};

var router = Router();
router.use(routeLogger);

export { router };