import { EntityManager } from "@mikro-orm/mysql";
import { ForbiddenException, HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class ApiAuth implements NestMiddleware {
    constructor(private readonly em: EntityManager) {}
    async use(request: Request, response: Response, next: NextFunction) {
        
        const apiKey = request.header("Authorization")

        if (!apiKey) {
            return next(new HttpException("Forbidden", 403))
        }

        try {
            const user = await this.em.findOneOrFail(User, { apiKey })
            request.user = user
            return next()
        } catch(exception) {
            throw new ForbiddenException()
        }
    }
}
