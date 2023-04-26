import { MikroORM, EntityManager } from "@mikro-orm/core"
import { MySqlDriver } from "@mikro-orm/mysql"
import { User } from "src/users/entities/user.entity"

declare global {
    namespace Express {
        export interface Request {
            di: {
                orm: MikroORM<MySqlDriver>
                em: EntityManager<MySqlDriver>
            },
            user: User
        }
    }
}
