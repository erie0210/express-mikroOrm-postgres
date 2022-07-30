import {DI} from "../server";
import {QueryOrder} from "@mikro-orm/core";

export class AuthorRepository{
    getThreeAuthors(){
        return DI.authorRepository.findAll({
            orderBy: { name: QueryOrder.DESC },
            limit: 3,
        });
    }
}
