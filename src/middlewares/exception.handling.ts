import { stderr } from 'process';

const handleException = function (ex: Error): void {
    stderr.write(`Unexpected exception occured. ${ex.message}`);
    process.exit(1);
};

const handleRejectedPromise = function (reason: string, _promise: Promise<any>): void {
    stderr.write(`Unexpected exception occured. ${reason}`);
    process.exit(1);
};

export const registerExceptionHandler = function (): void {
    process.on('uncaughtException', handleException);
    process.on('unhandledRejection', handleRejectedPromise);
};