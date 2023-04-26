declare class HttpException extends Error {
    message: string;
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export default HttpException;
