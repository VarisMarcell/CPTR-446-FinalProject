import { EntityManager } from "@mikro-orm/mysql";
import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
export declare class ApiAuth implements NestMiddleware {
    private readonly em;
    constructor(em: EntityManager);
    use(request: Request, response: Response, next: NextFunction): Promise<void>;
}
